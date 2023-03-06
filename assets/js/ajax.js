const testiPromise = new Promise((resolve, reject) => {
    const bebas = new XMLHttpRequest()
    bebas.open('GET', 'https://api.npoint.io/189dbfcda170649e53bc', true)
    bebas.onload = function () {
        if (bebas.status === 200) {
            resolve(JSON.parse(bebas.response))
        } else {
            reject('Error load Data!')
        }
    }
    bebas.onerror = function () {
        reject('Network Error!')
    }
    bebas.send()

})


async function getAllTesti() {
    const response = await testiPromise
    console.log(response)

    let testiHtml = ''
    response.forEach((item) => {
        testiHtml += `<div class="testimonial">
            <img src="${item.image}" class="profile-testimonial" />
            <p class="quote">"${item.content}"</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>`
    });
    document.getElementById('testimonials').innerHTML = testiHtml;
}

getAllTesti()

async function getTestiFilter(rating) {
    const responseFilter = await testiPromise;

    let testiHtml = ''
    const filterRating = responseFilter.filter((item) => {
        return item.rating === rating;
    })

    if (filterRating.length === 0) {
        testiHtml = `<div>Data not Found</div>`
    } else {
        filterRating.forEach((item) => {
            testiHtml += `<div class="testimonial">
            <img src="${item.image}" class="profile-testimonial" />
            <p class="quote">"${item.content}"</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>`
        })
    }
    document.getElementById('testimonials').innerHTML = testiHtml;
}