// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB();

















/*

(async ()=>{
    try {
       const connectDB = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
    } catch (error) {
        console.error("Error: ", error);
        throw error
    }
})()
*/