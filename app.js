const express =require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
// db connect
const db=require('./config/db.config.js')
db();

module.exports=app;