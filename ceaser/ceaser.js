function checkKey(key) {
    key = parseInt(key);
    if (isNaN(key)) {
        return false;
    } else if (Number.isInteger(key)) {
        return true;
    } else {
        return false;
    }
}

let key = Bun.argv[2]
if (checkKey(key) === true) {
    console.log("Yes");
} else {
    console.log("Provide a key (integer) as an argument");
}