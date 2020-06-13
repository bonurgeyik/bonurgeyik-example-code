
const models = require("./src/models");
const { init } = require("./src/modules/parser");
const dotenv = require('dotenv').config();

models.sequelize.sync().then(function () {
    console.log("db initialized");
    console.log("processing files");
    init().then(() => {
        console.log("finished");
    });

});