module.exports = (sequelize, DataTypes) => {
    let Author = sequelize.define('Author', {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        indexes: [
            {fields:['name']}
        ],
        timestamps: false,
        freezeTableName: true,
        tableName: 'authors',
        name : {
            singular: "author",
            plural: "authors"
        }
    });
    Author.associate = function (models) {
        models.Author.belongsToMany(models.Book, {
            through: {model: models.BookAuthor, unique:false}
        });



    };


    return Author;

};