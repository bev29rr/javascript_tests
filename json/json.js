import {Database} from './db.js';

let fileName = './db.json';
let db = new Database(fileName);
await db.init();

let arg = Bun.argv[2];
db.addToDB("item", 1);
db.pushToDB(db, fileName);