const express = require('express');
const cron = require('node-cron');
var outlook = require("node-outlook");
const userRoutes = require("./src/routes/userRoutes");

require('dotenv').config();



const app = express();

app.use(userRoutes);



const port =4001;
app.listen(port, ()=>{
    console.log(`server listening ${port}`)
});