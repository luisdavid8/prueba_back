const Sequelize = require('sequelize');
var db = require("../database/db.js");

const Contacto = db.sequelize.define('persona', {
    ID: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    NOMBRE: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TELEFONO: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    id: false
});

module.exports = Contacto;