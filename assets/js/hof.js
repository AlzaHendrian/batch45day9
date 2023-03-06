

let janji = new Promise(function (gagal, berhasil) {
    if (true === false) {
        berhasil('janji ditepati')
    } else {
        gagal('Janjimu palsu')
    }
})

janji.then(response => console.log(response)).catch((error) => console.log(error))