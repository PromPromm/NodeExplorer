const {Sequelize, DataTypes} = require("sequelize")
const CONFIG = require('../config/dbConfig')
const BookModel = require('./book')

const sequelize = new Sequelize(
    CONFIG.DB_NAME,
    CONFIG.DB_USER,
    CONFIG.DB_PASSWORD,
    {
        host: CONFIG.DB_HOST,
        dialect: CONFIG.DB_DIALECT
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    }).catch((err) => {
        console.log('Unable to connect to the database', err)
    })

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.books = BookModel(sequelize, DataTypes) 

db.sequelize.sync({force: false})
    .then(() => {
        console.log('Database and tables synced')
    }).catch((err) => {
        console.log(err)
    })

module.exports = db
