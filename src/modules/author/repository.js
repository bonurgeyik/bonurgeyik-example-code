const models = require('../../models');

module.exports = {
    findOrCreate
}



async function findOrCreate(authorData) {
    return await models.Author.findOrCreate(authorData);
}