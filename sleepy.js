async function timeoutLoop(time) {
    console.log("About to sleep for ", time);
    let seconds = 1;
    
    let messageTick = setInterval(() => {
        let text = "Asleep for " + seconds.toString() + " seconds";
        console.log(text);
        seconds += 1;
    } , 1000);

    await new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(messageTick);
            console.log("Awake!");
            resolve();
        }, time * 1000 + 50);
    })
    return 0;
}

function promptUser() {
    let time = prompt("How many seconds would you like me to sleep for? ");
    time = parseInt(time);

    if (Number.isNaN(time)) {
        promptUser();
        return 0;
    }

    let seconds = 1;
    let messageTick = setInterval(() => {
        let text = "Asleep for " + seconds.toString() + " seconds";
        console.log(text);
        if (seconds === time) {
            clearInterval(messageTick);
            console.log("Awake");
            promptUser();
            return 0;
        }
        seconds += 1;
    }, 1000);
    return 0;
}

promptUser()