const calculator = document.querySelector('.calculator')

calculator.addEventListener('click', onCalcBtn)

function onCalcBtn(event) {
    if (event.target.nodeName != "BUTTON") {
        return
    }

    console.log(event.target.textContent);
} 