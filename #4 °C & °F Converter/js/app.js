const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')



// T(°F) = T(°C) x 1.8 + 32
//T(°C) = (T(°F) - 32) / 1.8

const swap = () => {
    if(one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
result.textContent = ''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
  result.textContent = ''      
    }
}

const fahrToCel = () => {
    const fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C is ${fahrenheit.toFixed(1)}°F`
converter.value = ''
}

const CelToFahr = () => {
    const celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F is ${celsius.toFixed(1)}°C`
    converter.value = ''
}


const conversion = () => {
    if(converter.value !== '') {
        
        if(one.textContent === '°C') {
            fahrToCel()
        } else {
            CelToFahr()
        }
    } else {
        result.textContent = 'You have to type some number!'
    }
}

const reset = () => {
    converter.value = ''
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click',CelToFahr)
resetBtn.addEventListener('click', reset)
