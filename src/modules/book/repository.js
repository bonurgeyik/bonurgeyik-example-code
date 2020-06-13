const models = require('../../models');

module.exports = {
    create
}

async function create(bookData) {
    return await models.Book.create(bookData);
}