function duplicateEncode(word) {
    word = word.toLowerCase();
    let wordCount = getRepeats(word);

    return wordCount;
}

function getRepeats(word) {
    let wordCount = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] in wordCount) {
            wordCount.push(word[i]);
        } 
    }
    return wordCount
}

function sumTwoSmallestNumbers(numbers) {  
    let n_0, n_1;
    n_0 = numbers[0];
    n_1 = numbers[1];
    let smallestNumbers = n_0 < n_1 ? [n_0, n_1] : [n_1, n_0];
    for (let i = 2; i < numbers.length; i++) {
        console.log(numbers[i]);
        if (numbers[i] < smallestNumbers[1]) {
            if (numbers[i] < smallestNumbers[0]) {
                smallestNumbers[1] = smallestNumbers[0];
                smallestNumbers[0] = numbers[i];
            } else {
                smallestNumbers[1] = numbers[i];
            }
        }
    }
    return smallestNumbers[0] + smallestNumbers[1];
}

//let theWORDS = duplicateEncode("wOrd");
//console.log(theWORDS);

//console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));