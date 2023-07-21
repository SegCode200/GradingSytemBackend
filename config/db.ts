import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const STRING_URL = process.env.APPLICATION_DB!



const dbConfig=async() =>{
    try {
        await mongoose.connect(STRING_URL)
        console.log("Connected to Database")
    } catch (error:any) {
        console.log(error.message)
        
    }


}
export default dbConfig