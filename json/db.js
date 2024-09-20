class Database {
    constructor(fileName) {
        this.fileName = fileName;
        this.db = [{}];
    }
    
    async init() { // Begin the connection to the db
        let db = [{}];
        const file = await Bun.file(this.fileName);

        if (await file.exists()) {
            const text = await file.text()
            const lines = text.split('\n');
            console.log(text.length);
            for (const line in lines) {
                await db.push(line.json());
                console.log(line);
            }
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
        console.log("THIS=>", this.db);
        const dbString = db.join('');
        Bun.write(this.fileName, JSON.stringify(dbString));
    }

    clearDB(db) {
        for (let key in db) {
            delete db[key];
        }
    }
}

export {Database};