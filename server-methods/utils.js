const fs = require("fs")
const path = require("path")
const bookDbPath = path.join(__dirname, 'db', 'books.json')

//tried creating functions for reading and writing to the database file to implement Do Not Repeat
//but in this case, simplicity is the best approach

function readcb(DBPath, callback) {
    fs.readFile(DBPath, 'utf-8', (err, books) => {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }
        const parsedBooks = JSON.parse(books);
        callback(null, parsedBooks);
    });
}

function writecb(data, callback) {
    fs.writeFile(bookDbPath, JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }
        callback(null);
    });
}

module.exports = {readcb, writecb}