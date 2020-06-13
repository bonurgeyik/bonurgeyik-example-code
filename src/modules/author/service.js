const repository = require('./repository');
module.exports = {
    insertAuthor
}

async function insertAuthor(authorData) {
    return await repository.findOrCreate(authorData).catch(err => {
        console.log(err);
        return [null, false];
    });;
}
