
const buttons = [...document.querySelectorAll('button')];


let currentPlayer = 'X'

function handleButtonClick(event){
    event.currentTarget.textContent = currentPlayer
    console.log(event)
}


buttons.forEach(button =>{
    button.addEventListener('click',handleButtonClick)
})