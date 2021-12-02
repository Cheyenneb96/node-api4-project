require("dotenv").config();
const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

server.get('/api/users', (req,res,next)=>{
    res.json(users)
})

server.use("*", (req,res,next)=>{
    res.send(`<h1>hi there</h1>`)
})

server.use((err, req,res,next)=>{ // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})