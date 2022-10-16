let password = document.querySelector('#password');
let containerPassword = document.querySelector('.box-pass')
let sliderElement = document.querySelector('#range');
let lengthPass = document.querySelector('#length');
let btn = document.querySelector('#btn');
let upperCase = document.querySelector('#upperCase');
let lowerCase = document.querySelector('#lowerCase');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let senhaCopiada = document.querySelector('.copiada')

lengthPass.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    lengthPass.innerHTML = this.value;
} 

let forPass = '';
let novaSenha = ''
function generatepass(){
    forPass = ''
    if(upperCase.checked){
        forPass += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(lowerCase.checked){
        forPass += 'abcdefghijklmnopqrstuvwxyz'
    }
    if(numbers.checked){
        forPass += '0123456789'
    }
    if(symbols.checked){
        forPass += '!@#$%*'
    }
    let pass = ''
    for (let i = 0, n = forPass.length; i < sliderElement.value; ++i){
        pass += forPass.charAt(Math.floor(Math.random()*n));
    }
    password.innerHTML = pass
    novaSenha = pass
    containerPassword.classList.remove('hide')
    
}

function copyPass(){
    navigator.clipboard.writeText(password.innerHTML)
    senhaCopiada.classList.remove('hide')
    setTimeout(function(){
        senhaCopiada.classList.add('hide')
    },2500);
}    

// coment