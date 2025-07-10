const express = require('express')

const app = express();

app.use(express.json())

let notes = []

app.get('/', (req, res) => {
    res.send('Hello, Dhruv!')
})

//Create Note
app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "Note Created Successfully",
    })
})

//Display All Note
app.get('/notes', (req, res) => {
    res.json(notes)
})

//Delete Note
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.json({
        message: "Note Deleted Successfully",
    })
})

//Update Note
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const { title } = req.body
    notes[index].title = title
    res.json({
        message: "Note Updated Successfully",
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})