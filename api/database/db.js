'use strict';

const Sequelize = require("sequelize");
const db = {}

const sequelize = new Sequelize("contactos_db", "root", "", {
    host: '127.0.0.1', dialect: "mysql",
    define: { freezeTableName: true, },
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;