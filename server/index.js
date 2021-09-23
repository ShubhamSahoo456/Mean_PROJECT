const express = require('express');
const dotenv = require('dotenv');

//seceet keys
dotenv.config({path:'./config.env'})
const port = process.env.PORT

const app = express();
app.use(express.json())

//db conn
require('./config/mongoconn')

//routers
app.use(require('./router/User'))


app.listen(port,()=>{
    console.log(`port ${port} is listening`)
})