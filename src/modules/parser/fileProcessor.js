
const fileParser = require("./fileParser");
const transformer = require("./transformer");
const bookService = require("../book/service");
const fs = require('graceful-fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

module.exports = {
    processFile
}

async function processFile(element) {

    let file = await readFile(element, 'utf8');
    let parsedData = await fileParser.parseXmlFile(file);
    let bookData = transformer.getBookData(parsedData);
    await bookService.insertBook(bookData);
    

}