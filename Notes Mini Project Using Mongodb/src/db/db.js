const mongoose = require("mongoose")


function connectToDB() {
    mongoose.connect("MongoDB URI")
        .then(() => {
            console.log("Connected to DB")
        })
}

module.exports = connectToDB;