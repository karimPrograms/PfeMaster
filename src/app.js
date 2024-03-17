const express = require('express') //express app
const bodyparser = require('body-parser') //to parse data front<-->back
const cors = require('cors')
const morgan = require('morgan') //log
const {sequelize} = require ('./models') //database transactions
const config = require('./config/config')

//express server
const app = express()
app.listen(8082);

//enable packages
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors())

//routing
require('./routes')(app)

//DataBase Connection:
const db = require('./db')
db.connect()