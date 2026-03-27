let password = document.querySelector('#password')
let eye = document.querySelector('#close')

eye.addEventListener('click', () => {
    if (password.type == "password") {
        password.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else {
        password.type = "password"
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
})