const buttonNumbers = document.getElementsByName('data-number');
const buttonOperands = document.getElementsByName('data-opera');
const buttonResult = document.getElementsByName('data-result')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var output = document.getElementById('output');
var opeCurrent = '';
var opePrevious = '';
var operation = undefined;

buttonNumbers.forEach(function(boton){
    boton.addEventListener('click', function(){
        aggNumber(boton.innerText);
    })
});

buttonOperands.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperation(boton.innerText);
    })
});

buttonResult.addEventListener('click', function(){
    calculate();
    updateDisplay(); 
});

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay(); 
});

function aggNumber(number){
    opeCurrent = opeCurrent.toString() + number.toString();
    updateDisplay();
}

function updateDisplay(){
    output.value = opeCurrent;
}

function calculate(){
    var calc;
    const previus = parseFloat(opePrevious); 
    const current = parseFloat(opeCurrent);
    if(isNaN(previus) || isNaN(current)) return;
    switch(operation){
        case '+':
            calc = previus + current;
            break;
        case '-':
            calc = previus - current;
            break;
        case '/':
            calc = previus / current;
            break;
        case '*':
            calc = previus * current;
            break;
        default:
            return;
    }

    opeCurrent = calc.toString();
    operation = undefined;
    opePrevious = '';
}

function selectOperation(op){
    if(opeCurrent === '') return;
    if(opePrevious !== ''){
        calculate();
    }

    operation = op.toString();
    opePrevious = opeCurrent;
    opeCurrent = '';
}

function clear(){
     opeCurrent = '';
     opePrevious = '';
     operation = undefined;
}

clear();
