const express = require("express")
const connectToDB = require("./src/db/db")
const noteModel = require("./src/models/note.model")

const app = express()
app.use(express.json())

//Create Note
app.post('/notes', async (req, res) => {
    const { title, content } = req.body
    console.log(title, content)
    await noteModel.create({
        title, content
    })
    res.json({
        message: "Note Created Successfully"
    })
})

//Display All Note
app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.json({
        message: "Notes Fetched Successfully",
        notes
    })
})

//Delete Note
app.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    await noteModel.findOneAndDelete({
        _id: noteId
    })

    res.json({
        message: "Note Deleted Succesfully",
    })
})

//Update Note
app.patch('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    const { title } = req.body

    await noteModel.findByIdAndUpdate({
        _id: noteId
    }, {
        title: title
    })

    res.json({
        message: "Note Updated Successfully"
    })
})


connectToDB()
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})