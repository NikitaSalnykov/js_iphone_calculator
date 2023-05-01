const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calc_output')
const clearBtn = calculator.querySelector('button[data-action="clear"]');
const resultBtn = calculator.querySelector('button[data-action="result"]')

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operation = ['±', '%', '÷', '×', '-', '+', '=']

let a = ''
let b = ''
let sign = ''
let result = null

calculator.addEventListener('click', onClearBtn)

function onClearBtn(event) {
    if (event.target === clearBtn) {
        a = ''
        b = ''
        output.textContent = 0
    }
}

calculator.addEventListener('click', onResultButton)

function onResultButton (event) {
    if (event.target !== resultBtn) {
        return
    }

    if (a !== '' && b !== '' && sign !== '' && operation.includes(event.target.textContent)) {
        switch (sign) {
            case '×':
                result = Number(a) * Number(b)
                break;
            case '+':
                result = Number(a) + Number(b)
                break;
            case '÷':
                result = Number(a) / Number(b)
                break;
            case '-':
                result = Number(a) - Number(b)
                break;
        }

        output.textContent = result

        a = result
        b = ''
        sign = ''
    }

}

calculator.addEventListener('click', onCalcBtn)

function onCalcBtn(event) {
    if (event.target.nodeName != "BUTTON") {
        return
    }
    if (event.target === clearBtn || event.target === resultBtn) {
        return
    }
    
    if (output.textContent.includes('.') && event.target.textContent === '.') {
    return;
    } 

    if (a === '' && event.target.textContent === '.') {
    a = '0'
    }
    
    if (a === '' && event.target.textContent === '0' || b === '0' && event.target.textContent === '0') {
        return
    }

    if (digits.includes(event.target.textContent)) {
        if (sign === '' && a !== result) {
            a += event.target.textContent
            output.textContent = a
            console.log(`a: ${a}`);
        } else {
            b += event.target.textContent
            output.textContent = b
            console.log(`b: ${b}`);
        }
    }

    if (operation.includes(event.target.textContent)) {
        sign = event.target.textContent
        if (sign != '') {
            
        }
    }
    
    console.log(event.target.textContent);
} 