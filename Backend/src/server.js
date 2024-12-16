import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';
dotenv.config({
    path: '/env'
})

const PORT = process.env.PORT || 8090;

// Database connection
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!! ", err);
    
});
