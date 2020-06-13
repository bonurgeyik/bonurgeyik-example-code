const repository = require('./repository');
const authorService = require('../author/service');

module.exports = {
    insertBook
}

async function insertBook(bookData) {
    let authors = bookData.authors;
    
    let book = await repository.create(bookData).catch(err => {
        console.log(err);

        return null;
    });
    if(book) {
        for(let i=0; i < authors.length; i++) {
            let author = authors[i];
            let options = {
                where: {
                    id: author.id,
                    name: author.name
                }
            }
            let [savedAuthor, created] = await authorService.insertAuthor(options).catch(err => {
                console.log(err);
                return [null, false];
            });
            await book.addAuthor(savedAuthor);
        }
        
    }
    return book;
}