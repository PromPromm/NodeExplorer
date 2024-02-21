module.exports = (sequelize, DataTypes) => {
    const BookModel = sequelize.define('books', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Books'
    })
    return BookModel
}