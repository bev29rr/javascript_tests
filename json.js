let db = {};
let file = Bun.file('db.json')

if (await file.exists()) {
    db = await file.json();
} else {
    console.log("Failed to connect!");
}

function addToDB(db, item) {
    //db.something = item;
    console.log("the item");
    console.log(db);
}

let arg = Bun.argv[2];
addToDB(db, arg);