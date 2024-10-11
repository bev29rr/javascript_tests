function factorial(n) { 
    let ans = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i;
    console.log(ans);
    return ans; 
}

function sum(limit, step, initNum = 1) {
    let total = 0;
    let current = initNum;

    while (current <= limit) {
        total += current;
        current = step(current);
    }
    return total;
}

function getPrime(n) {
    return sum(
        2 ** n,
        i => {
            return (n / (
                sum(
                    i,
                    j => {
                        Math.cos(
                            (factorial(j - 1) + 1) * (Math.PI/j)
                        ) ** 2;
                    },
                    1
                )
            )) ** 1/n;
        },
        1);
}



console.log(getPrime(4));