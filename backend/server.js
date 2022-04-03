const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser')
require('dotenv').config()

const likesRouter = require('./routes/likes')
const rateRouter = require('./routes/rate')
const viewRouter = require('./routes/view')

const port = process.env.PORT || 9999

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;

app.use('/view',viewRouter)
app.use('/likes',likesRouter)
app.use('/rates',rateRouter)

mongoose
.connect(uri,{  //.connect(connectionString)
})       

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})
