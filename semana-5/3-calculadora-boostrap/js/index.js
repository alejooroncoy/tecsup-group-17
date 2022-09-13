'use strict';

const documentReady = () => {
  const calculatorForm = document.getElementById('calculatorForm');
  
  const showResult = (result) => {
    const resultRef = document.getElementById('result');
    if(+resultRef.textContent === result) return;
    resultRef.animate([
      {
        transform: 'scale(.92)'
      },{
        transform: 'scale(1)',
      }
    ], {
      iterations: 1,
      duration: 200,
    });
    resultRef.textContent = result; 
  };

  const actions = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
  }

  const calculate = (e) => {
    e.preventDefault();
    const { value: number1 } = document.getElementById('number1');
    const { value: number2 } = document.getElementById('number2');
    const { value: operator } = document.getElementById('operator');
    
    const result = actions[operator](+number1, +number2)
    showResult(result)
  };

  calculatorForm.addEventListener('submit', calculate)
};

document.addEventListener('DOMContentLoaded', documentReady);