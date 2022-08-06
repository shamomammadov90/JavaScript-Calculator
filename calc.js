
let numberButtons = document.querySelectorAll("#data-num");
let operatorButtons = document.querySelectorAll("#data-op");
let equalButton = document.querySelector("#data-equal");
let deleteButton = document.querySelector("#data-remover");
let allCleanButton_AC = document.querySelector("#AC-cleaner");
let allCleanButton_C = document.querySelector("#C-cleaner");
let kvadratButton = document.querySelector("#kvadrat");
let firstDisplay = document.querySelector("#operation-display");
let currentDisplay = document.querySelector("#total-display");
let decimal = document.querySelector('.decimal');


class Calculator {
    constructor(firstDisplay, currentDisplay){
        this.firstDisplay = firstDisplay;
        this.currentDisplay = currentDisplay;
        this.clear();
        this.myFunction();
    }

    myFunction(){
        let displayValue = '0';
        currentDisplay.innerText = displayValue;
    }

    clear(){
        this.firstOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete(){
        if(this.currentOperand != ''){
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }else{
            return this.myFunction();
        }
        
    }

    kvadrat(){
        let n = this.currentOperand;
        this.currentOperand = Math.pow(n, 2);
    }
    // decimal(decimal){
    //     if(!this.currentOperand.includes('.')) {
    //         this.currentOperand += '.';
    //     }else if(this.currentDisplay.innerText === '0' || this.currentDisplay.innerText === '') return
    // }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        
    }

    chooseOperation(operation){
        if(this.currentOperand === '' && this.currentOperand !== '-') return
        if(this.firstOperand !== ''){
            this.calc();
        }
        this.operation = operation;
        this.firstOperand = this.currentOperand;
        this.currentOperand = '';
        
    }

    calc(){
        let computation;
        let firstNum = parseFloat(this.firstOperand);
        let currentNum = parseFloat(this.currentOperand);
        switch(this.operation){
            case '+':
                computation = firstNum + currentNum; break;
            case '-':
                computation = firstNum - currentNum; break;
            case '*':
                computation = firstNum * currentNum; break;
            case '/':
                computation = firstNum / currentNum; break;
            case '%':
                computation = (firstNum * currentNum) / 100; break;
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.firstOperand = '';
    }

    getDispalyNumber(number){
        let stringNumber = number.toString();
        let integerDigits = parseFloat(stringNumber.split('.')[0]);
        let decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;

        if(isNaN(integerDigits)){
            integerDisplay = '';
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }

        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        if(this.currentOperand !== '' && this.currentOperand !== '0' || this.firstOperand != '') {
            allCleanButton_C.style.display = "block";
            allCleanButton_AC.style.display = "none";
        }else{
            allCleanButton_C.style.display = "none";
            allCleanButton_AC.style.display = "block";
        }

        this.currentDisplay.innerText = this.getDispalyNumber(this.currentOperand);
        if(this.operation != null){
            this.firstDisplay.innerText = `${this.firstOperand}${this.operation}${this.currentOperand}`;
        }else{
            this.firstDisplay.innerText = '';
        }
    }
}


const calculator = new Calculator(firstDisplay, currentDisplay);

numberButtons.forEach(button => {
    button.addEventListener("click", function(){
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function(){
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', function() {
    calculator.calc()
    calculator.updateDisplay()
});

allCleanButton_AC.addEventListener("click", function() {
    calculator.clear()
    calculator.updateDisplay()
    calculator.myFunction()
});

allCleanButton_C.addEventListener("click", function() {
    calculator.clear()
    calculator.updateDisplay()
    calculator.myFunction()
});

deleteButton.addEventListener("click", function() {
    calculator.delete()
    calculator.updateDisplay()
});
kvadratButton.addEventListener("click", function(){
    calculator.kvadrat()
    calculator.updateDisplay()
})

// decimal.addEventListener("click", function(){
//     calculator.decimal()
//     calculator.updateDisplay()
// })



























// (function(){

//     let answer = document.querySelector(".answer");
//     let buttoms = document.querySelectorAll(".btn");
//     let btn_clear = document.querySelector(".btn-clear");
//     let btn_equal = document.querySelector(".btn-equal");
//     let btn_Kvadrat = document.querySelector(".btn-kvadrat");

//     let displayValue = "0";
//     answer.innerHTML = displayValue;

//     buttoms.forEach(function(b){
//         b.addEventListener("click", function(e){
//             let btnValue = e.target.dataset.num;
//             answer.innerHTML += btnValue;
//         })
//     })
// })();




