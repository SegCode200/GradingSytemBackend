import express,{Application} from 'express';
import appConfig from "./app"
import dbConfig from '../config/db';
import dotenv from "dotenv"


//IIFE immediately invoked function expression

const app:Application = express();
const port = process.env.APPLICATION_PORT!
const realPort:number = parseInt(port)


const server = async()=>{
    try {
        appConfig(app) //initialize app
        dbConfig();// initialize db 

        // Server listening
        app.listen(realPort || process.env.APPLICATION_PORT, ()=>{
            console.log(`Server listening on`,realPort)
        })
    
        
    } catch (error:any) {
        console.log(error.message)
        
    }
  
}

server()