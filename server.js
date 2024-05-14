const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()


app.use(cookieParser())

app.get('/setCookie', (req,res) => 
{
    
})