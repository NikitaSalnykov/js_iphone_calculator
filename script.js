const calculator = document.querySelector('.calculator')
const output = calculator.querySelector('.calc_output')
const clearBtn = calculator.querySelector('button[data-action="clear"]');
const resultBtn = calculator.querySelector('button[data-action="result"]')
const transformBtn = calculator.querySelector('button[data-action="transform"]')

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operation = ['÷', '×', '-', '+', '=']
// ['±', '%'] 

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
    
    mathOperation (event)

}

calculator.addEventListener('click', onCalcBtn)

function onCalcBtn(event) {
    if (event.target.nodeName != "BUTTON") {
        return
    }
    if (event.target === clearBtn || event.target === resultBtn || event.target === transformBtn) {
        return
    }
    
    if (output.textContent.includes('.') && event.target.textContent === '.') {
    return;
    }

    if (a === '' && event.target.textContent === '.') {
    a = '0'
    }

    if (sign !== '' && b === '' && event.target.textContent === '.') {
    b = '0'
    }
    
    if (a === '0' && event.target.textContent === '0' || b === '0' && event.target.textContent === '0') {
        return
    }

    if (digits.includes(event.target.textContent)) {
        if (sign === '' && a !== result) {
            if (a.split('').length > 8) {
            return
            }
            a += event.target.textContent
            output.textContent = a
           
        } else {

              if (b.split('').length > 8) {
             return
            }
            b += event.target.textContent
            output.textContent = b

        }
    }

    if (operation.includes(event.target.textContent)) {
        if (a === '') {
           return
        }

        if (sign != '') {
            b = ''
            sign = event.target.textContent
        } else {
            sign = event.target.textContent
        }

        if (a !== '' && b !== '') {
            mathOperation(event)
        }

    }

    


} 


calculator.addEventListener('click', onTransformButton)

function onTransformButton(event) {
    if (event.target.textContent === '±') {
        if (b !== '' && output.textContent === b) {
            b = (Number(b) * -1).toString()
            output.textContent = b
        } else if (a !== '' && output.textContent === a && a !== result) {
            a = (Number(a) * -1).toString()
            output.textContent = a
        } else if (result === a) {
            a = (Number(a) * -1).toString()
            output.textContent = a
        }
    }

    if (event.target.textContent === '%') {
        if (b !== '' && output.textContent === b) {
            b = (Number(b) / 100).toString()
            output.textContent = b
        } else if (a !== '' && output.textContent === a && a !== result) {
            a = (Number(a) / 100).toString()
            output.textContent = a
        } else if (result === a) {
            a = (Number(a) / 100).toString()
            output.textContent = a
        }
    }
}



function mathOperation(event) {
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
    }

     console.log(`a: ${a} b: ${b} operation: ${sign} result: ${result}`);
}

