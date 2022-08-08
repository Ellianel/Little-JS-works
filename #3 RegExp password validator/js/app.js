const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2.3}$/i

// RegExp
// random@email.com

const showMsg = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = 'Your password is very strong! 💪'
        p.style.color = 'lime'
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = 'Your password is strong! 😉'
        p.style.color = 'gold'
    } else {
        p.textContent = 'Your password is weak! 😕 '
        p.style.color = 'tomato'
    }
}

const checkPassword = () => {
    if(pass.value !== '') {
        showMsg()
    } else {
        p.textContent = "You haven't type anything.. 🤔🤨"
        p.style.color = ''
    }
}

pass.addEventListener('keyup', checkPassword)
