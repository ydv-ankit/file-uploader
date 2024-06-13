import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectToMongoDatabase } from './config/db';
import userRoutes from './routes/user.route';
import fileRoutes from "./routes/file.route"

/* server app and middlewares */
const app = express();
// parse req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookieParser
app.use(cookieParser())

// access files
app.use("/files", express.static("files"));
// access env variables
dotenv.config();

// env variables
const dbUrl = process.env.MongoDBURL || "";
const PORT = process.env.PORT || 8383;

// connect to mongoDB Atlas
connectToMongoDatabase(dbUrl).then((res) => {
    console.log("SUCCESS: connected to database");
}).catch((err) => {
    console.log("ERROR: ", err);
});

// routes
app.get('/', (req: any, res: any) => {
    res.send("server running")
})

app.use("/api/users", userRoutes);
app.use("/api/file", fileRoutes);

// start server listening for requests
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})