import express from 'express'
import dotenv from 'dotenv';
import { connectToMongoDatabase } from './config/db';

// app and middlewares
const app = express();
dotenv.config();

// env variables
const dbUrl = process.env.MongoDBURL || "";
const PORT = process.env.PORT || 8383;

// connect to mongoDB Atlas
connectToMongoDatabase(dbUrl);

// routes
app.get('/', (req: any, res: any)=>{
    res.send("server running")
})

// start server listening for requests
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})