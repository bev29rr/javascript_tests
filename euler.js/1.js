function getMultiples(num, max) {
    let numbers = [];
    let running = true;
    let counter = 0;

    while (running) {
        if (num * counter < max) {
            numbers.push(num * counter);
        } else {
            running = false;
        }
        counter++;
    }
    return numbers;
}

function getFibonnaci(limit) {
    let numbers = [1, 2];

    while (true) {
        let thisNum = numbers[numbers.length - 2] + numbers[numbers.length - 1]; 
        if (thisNum > limit) {
            break;
        } else {
            numbers.push(thisNum);
        }
    }
    return numbers;
}

function addOnlyEven(numbers) {
    let summation = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            summation += numbers[i];
        }
    }
    return summation;
}

let numbers = getFibonnaci(4000000);
console.log(addOnlyEven(numbers))