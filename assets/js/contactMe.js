function onSubmit() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

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

    if (name == "") {
        return document.getElementById('alert').innerHTML = 'Please input your name';
    } else if (email == "") {
        return document.getElementById('alert').innerHTML = 'Please input your email';
    } else if (phone == "") {
        return document.getElementById('alert').innerHTML = 'Please input your phone';
    } else if (subject == "") {
        return document.getElementById('alert').innerHTML = 'Please input your subject';
    } if (message == "") {
        return document.getElementById('alert').innerHTML = 'Please input your message';
    } else {
        const defaultEmail = 'alzahendriaan@gmail.com'
        let mailTo = document.createElement('a')
        mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Hi my name is ${name}, I want to ${message} Please call me back in my number : ${phone} , Thankyou.`
        mailTo.click()

        let audience = {
            name,
            email,
            phone,
            subject,
            message
        }

        console.log(audience);
    }

    document.getElementById("alert").style.color = "#16FF00";
    document.getElementById("alert").innerHTML = "Email has been sent"


}