const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    res.send('Welcome to the Home Page')
})

app.get('/about',(req,res)=>{
    res.send('Welcome to the About Us Page')
})

app.listen(3000,()=>{
    console.log('Server is runnig on port 3000')
})
