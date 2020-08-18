const express = require('express');
const app = express()
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send("very professional response")
})

app.listen(3000,()=>{
    console.log("listening on 3000")
})