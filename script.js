const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calc_output')
const clearBtn = calculator.querySelector('button[data-action="clear"]');

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','];
const operation = ['±', '%', '÷', '×', '-', '+', '=']

let a = ''
let b = ''
let sign = ''

calculator.addEventListener('click', onClearBtn)

function onClearBtn(event) {
    if (event.target === clearBtn) {
        a = ''
        b = ''
        output.textContent = 0
    }
}


calculator.addEventListener('click', onCalcBtn)

function onCalcBtn(event) {
    if (event.target.nodeName != "BUTTON") {
        return
    }
    if (event.target === clearBtn) {
        return
    }
    

    if (digits.includes(event.target.textContent)) {
        if (sign === '') {
            a += event.target.textContent
            output.textContent = a
            console.log(`a: ${a}`);
        }
        if (sign != '') {
            b += event.target.textContent
            output.textContent = b
            console.log(`b: ${b}`);
        }
    }

    if (a.split('').includes(',') || b.split('').includes(',')) {
    return
    }


    if (operation.includes(event.target.textContent)) {
        sign = event.target.textContent
console.log(sign);
    }





    
    console.log(event.target.textContent);
} 