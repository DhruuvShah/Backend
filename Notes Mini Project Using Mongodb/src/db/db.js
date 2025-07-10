const mongoose = require("mongoose")


function connectToDB() {
    mongoose.connect("Connection String")
        .then(() => {
            console.log("Connected to DB")
        })
}

module.exports = connectToDB;