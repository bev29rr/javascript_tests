class Calculator {
    constructor(defaultSize) {
        this.defaultSize = defaultSize;
    }

    add(...params) {
        return this.unlimitedParamsCalc(1, params);
    }

    addPositively(...params) {
        let answer = this.unlimitedParamsCalc(1, params);
        return answer < 0 ? answer : answer * -1
    }

    multiply(...params) {
        return this.unlimitedParamsCalc(3, params);
    }

    unlimitedParamsCalc(type, params) {
        if (this.defaultSize == params.length && params.length > 1) {
            let accumulatedAns = parseInt(params[0]);
            for (let i = 1; i < params.length; i++) {
                switch (type) {
                    case 1: {
                        accumulatedAns += parseInt(params[i]);
                        break;
                    }
                    case 2: {
                        accumulatedAns -= parseInt(params[i]);
                        break;
                    }
                    case 3: {
                        accumulatedAns *= parseInt(params[i]);
                        break;
                    }
                }
            }
            return accumulatedAns;
        } else {
            console.log("Invalid amount of inputs");
            return NaN;
        }
    }

    factorise() {

    }
}

export {Calculator};