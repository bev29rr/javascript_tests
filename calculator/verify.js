function verifyChoice(userInput) {
    let int = parseInt(userInput);

    if (int in [1,2,3]) {
        return int;
    } else {
        return false;
    }
}

function areNumbers(...params) {
    for (let i = 0; i < params.length; i++) {
        let userInput = parseInt(params[i]);
        if (!Number.isInteger(userInput)) {
            return false;
        }
    }
    return true;
}

function verify6() {

}

export {verifyChoice, areNumbers};