module.exports = (sequelize, DataTypes) => {
    let BookAuthor = sequelize.define('BookAuthor', {
        
    }, {
        timestamps: false,
        tableName: 'book_authors'
    });
    
    return BookAuthor;

};