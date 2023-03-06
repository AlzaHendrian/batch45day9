let projectsData = [];
function addProject(e) {
    e.preventDefault();

    let projectName = document.getElementById("project-name").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let technology1 = document.getElementById("technology-1")
    let technology2 = document.getElementById("technology-2")
    let technology3 = document.getElementById("technology-3")
    let technology4 = document.getElementById("technology-4")
    let uploadImage = document.getElementById("upload-image").files;


    const showAlert = document.getElementById('alert')

    let pos = 20
    let id = setInterval(frame, 5)

    function frame() {
        if (pos == 53) {
            clearInterval(id)
            showAlert.style.opacity = 0.8;
        } else {
            pos++;
            showAlert.style.opacity = 0.3;
            showAlert.style.top = pos + 'px';
        }
    }

    document.getElementById('alert').style.color = 'red';

    if (projectName == "") {
        return document.getElementById('alert').innerHTML = 'Enter your project name';
    } else if (startDate == "") {
        return document.getElementById('alert').innerHTML = 'Enter your project start date';
    } else if (endDate == "") {
        return document.getElementById('alert').innerHTML = 'Enter your project end date';
    } else if (description == "") {
        return document.getElementById('alert').innerHTML = 'Enter your project description';
    } else if (technology1 == false && technology2 == false && technology3 == false && technology4 == false) {
        return document.getElementById('alert').innerHTML = 'Enter at least 1 technology';
    } else if
        (uploadImage.length == 0) {
        return document.getElementById('alert').innerHTML = 'Enter your project image';
    } else {
        uploadImage = URL.createObjectURL(uploadImage[0]); //blob untuk menghandle gambar untuk menampung data image didalam url

        let projectData = {
            projectName,
            sDate: startDate,
            eDate: endDate,
            description,
            uploadImage,
            technologies: {
                tech1: technology1.checked,
                tech2: technology2.checked,
                tech3: technology3.checked,
                tech4: technology4.checked,
            }
        };
        projectsData.push(projectData);
        renderProject();
    }
    document.getElementById("alert").style.color = "#16FF00";
    document.getElementById("alert").innerHTML = "successfully"
}
function renderProject() {
    console.log(projectsData);
    document.getElementById("projects-container").innerHTML = "";
    for (let project of projectsData) {
        document.getElementById("projects-container").innerHTML += `
    <div id="project-container">
      <img src="${project.uploadImage}"/>
      <a href="projects/project-3.html"><h3>${project.projectName}</h2></a>
      <div>${setDuration(project.sDate, project.eDate)}</div>
      <p>
        ${project.description}
      </p>
      <div>
        ${project.technologies.tech1 ? '<i class="fa-brands fa-node fa-3x"></i>' : ""}
        ${project.technologies.tech2 ? '<i class="fa-brands fa-react fa-3x"></i>' : ""}
        ${project.technologies.tech3 ? '<i class="fa-brands fa-js fa-3x"></i>' : ""}
        ${project.technologies.tech4 ? '<i class="fa-brands fa-python fa-3x"></i>' : ""}
      </div>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
    `;
    }
}

const setDuration = (sDate, eDate) => {
    const start_date = new Date(sDate).getTime();
    const end_date = new Date(eDate).getTime();
    const result = end_date - start_date;

    let day = result / (1000 * 60 * 60 * 24);
    const week = Math.round(result / (1000 * 60 * 60 * 24 * 7))
    const month = Math.floor(result / (1000 * 60 * 60 * 24 * 30));

    const output = day < 7 ? (day === 1 ? `Duration : ${day} day` : `Duration : ${day} days`)
        : week <= 4 ? (week === 1 ? `Duration : ${week} week` : `Duration : ${week} weeks`)
            : month === 1 ? `Duration : ${month} month` : `Duration : ${month} months`;

    return output;
};