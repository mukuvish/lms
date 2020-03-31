"use strict"

import express from 'express'
import bodyParser from 'body-parser'
import { mongoConnect } from './config'
import { Router} from './api/routes'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', Router)
app.get('/', function(req, res) {
    res.send("Hello! Mukul");
});


 function StartServer(){
app.listen(2000, () => console.log('Example app listening on port 2000'))
  mongoConnect()
}
StartServer()

export {app}


