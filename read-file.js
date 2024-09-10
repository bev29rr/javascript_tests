let file = Bun.file('hello.txt');
let text = await file.text();
console.log(text);

text === "hey" ? console.log("value is hey") : console.log("value is not");

let name = prompt("What is your name?");
console.log(`your name is ${name}`);