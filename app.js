const previousOperandElement =document.querySelector('.previous_operand');
const currentOperandElement = document.querySelector('.current_operand');
const acButton = document.querySelector('#ac');
const delButton = document.querySelector('#del');
const equalsButton = document.querySelector('#equals');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn =document.querySelectorAll('.operator');

let previousOperand = ''
let currentOperand = ''

function updateDisplay(){
currentOperandElement.innerHTML =currentOperand ;
}

function appendNumber(number){
    currentOperand += number;
    console.log(currentOperand)
}

numberBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        if(btn.textContent === '.' && currentOperand.includes('.')) return;
        appendNumber(btn.textContent)
        updateDisplay()
    })
})