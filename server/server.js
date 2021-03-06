const express = require('express')
const path = require('path')

const app = express()

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, "../client/client.html"))
})

app.get('/css', function (req,res) {
    res.sendFile(path.join(__dirname, "../client/client.css"))
})


const port = process.env.PORT || 4321

app.listen(port, () => console.log(`Rockin' and Rollin' on ${port}`))