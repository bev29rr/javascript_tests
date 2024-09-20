class Database {
    constructor(fileName) {
        this.fileName = fileName;
        this.db = {};
    }
    
    static async init() { // Begin the connection to the db
        let db = {};
        let file = Bun.file(this.fileName);

        if (await file.exists()) {
            db = await file.json();
        } else {
            console.log("Failed to connect!");
        }
        this.db = db;
    }

    addToDB(item, amount = 0) {
        this.db.amount = amount;
        this.db.item = item;
        //1 3 1 4 1 6
    }

    pushToDB() {
        Bun.write(this.fileName, JSON.stringify(this.db));
    }

    clearDB(db) {
        for (let key in db) {
            delete db[key]
        }
    }
}

export {Database};