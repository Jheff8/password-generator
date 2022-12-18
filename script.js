let slider = document.querySelector("#slider")
let button = document.querySelector('#button')

let valor = document.querySelector('#valor')
let containerPassword = document.querySelector('.container-password')
let passw = document.querySelector('#password')
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let novaSenha = ''
valor.innerHTML = slider.value
slider.oninput = function(){
    valor.innerHTML = this.value
}
function generatePassword(){
    let pass  = ''
    for (let i = 0, n = charset.length; i<slider.value; i++){
        pass += charset.charAt(Math.round(Math.random() * n))
    }
    novaSenha = pass
    containerPassword.classList.remove('hide')
    passw.innerHTML = novaSenha
}
function copy(){
    alert('senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}