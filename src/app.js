const express = require('express')

const app = express()

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

const appid = {key: process.env.APPID}

app.get("/appid", (req, res) => res.send(JSON.stringify(appid)))

module.exports = app