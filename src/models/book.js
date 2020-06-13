module.exports = (sequelize, DataTypes) => {
    let Book = sequelize.define('Book', {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING(2000)
        },
        publisher: {
            type: DataTypes.STRING
        },
        publicationDate: {
            type: DataTypes.STRING
        },
        language: {
            type: DataTypes.STRING
        },
        subjects: {
            type: DataTypes.ARRAY(DataTypes.STRING(2000))
        },
        license: {
            type: DataTypes.STRING
        }
    }, 
    
    {
        
        indexes: [
            {fields:['title']},
            {fields:['publicationDate']}
        ],
        timestamps: false,
        freezeTableName: true,
        tableName: 'books',
        name : {
            singular: "book",
            plural: "books"
        }
    });
    Book.associate = function (models) {
        models.Book.belongsToMany(models.Author, {
            through: {model: models.BookAuthor, unique:false}
        });

    };


    return Book;

};