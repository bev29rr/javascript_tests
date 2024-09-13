import {Calculator} from './calculator.js'
import {verifyChoice, areNumbers} from './verify.js';

let calc = new Calculator(2);
console.log(calc.add(1,2));
let running = true;

function toNumbers(numbers) {
    let numberCollection = [];
    for (let i = 0; i < numbers.length; i++) {
        let userInput = parseInt(numbers[i]);
        if (Number.isInteger(userInput)) {
            numberCollection.push(numbers[i]);
        }
    }
    return numberCollection;
}

console.log("Welcome to the calculator")
while (running) {
    console.log("Choose (1) for add, (2) for multiply or (3) for factorial")
    let userInput = prompt("1, 2 or 3? ");
    let choice = verifyChoice(userInput);
    if (choice !== false) {
        let invalidInputs = true;
        let inputs = [];
        while (invalidInputs) {
            switch (choice) {
                case 1: {
                    inputs[0] = prompt("Choose the 1st number to add:");
                    inputs[1] = prompt("Choose the 2nd number to add:");
                    if (areNumbers(inputs[0], inputs[1]) === false) {
                        continue;
                    } else {
                        inputs = toNumbers(inputs);
                        invalidInputs = false;
                        console.log(calc.add(inputs[0], inputs[1]));
                    }
                    break;
                }
                case 2: {
                    inputs[0] = prompt("Choose the 1st number to multiply: ");
                    inputs[1] = prompt("Choose the 2nd number to multiply: ");
                    if (areNumbers(inputs[0], inputs[1]) === false) {
                        continue;
                    } else {
                        inputs = toNumbers(inputs);
                        invalidInputs = false;
                        console.log(calc.multiply(inputs[0], inputs[1]));
                    }
                    break;
                }
                case 3: {
                    inputs[0] = prompt("What number would you like to do the factorial of? ");
                    if (areNumbers(inputs[0]) === false) {
                        continue;
                    } else {
                        invalidInputs = false;
                        console.log(calc.factorise(inputs[0], inputs[1]));
                    }
                    break;
                }
                default:
                    console.log(userInput);
                    break;
            }
        }
    } else {
        continue;
    }
}