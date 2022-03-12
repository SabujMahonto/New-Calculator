const previousOperandElement =document.querySelector('.previous_operand');
const currentOperandElement = document.querySelector('.current_operand');
const acButton = document.querySelector('#ac');
const delButton = document.querySelector('#del');
const equalsButton = document.querySelector('#equals');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn =document.querySelectorAll('.operator');

let previousOperandDiv = '';
let currentOperandDiv = '';
let operation = '';

// current display Element
function updateDisplay(){
currentOperandElement.innerHTML = currentOperandDiv;
previousOperandElement.innerHTML =`${previousOperandDiv}${operation}`;
}

// function for append number 
function appendNumber(number){
    currentOperandDiv += number;
   
}

// Select Operator 
function selectOperator(operator){
    operation = operator;
    previousOperandDiv = currentOperandDiv;
    currentOperandDiv =''
}



//!when all number button click 
numberBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        if(btn.textContent === '.' && currentOperandDiv.includes('.')) return;
        appendNumber(btn.textContent)
        updateDisplay()
    })
})

// !when all operator button click 
operatorBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        if(btn.textContent === '.' && currentOperandDiv.includes('.')) return;
        selectOperator(btn.textContent)
        updateDisplay()
        console.log(btn.textContent)
    })
})