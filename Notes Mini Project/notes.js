const express = require('express')

const app = express();

app.use(express.json())

let notes = []

app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "Notes added successfully",
        notes: notes
    })
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})