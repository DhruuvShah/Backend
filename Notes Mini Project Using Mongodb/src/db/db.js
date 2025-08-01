const mongoose = require("mongoose")


function connectToDB() {
    mongoose.connect("mongodb+srv://dhruv27shah:gmd2qQieai1ss8aN@cluster0.se6xeas.mongodb.net/Cohort")
        .then(() => {
            console.log("Connected to DB")
        })
}

module.exports = connectToDB;