import express,{Application} from 'express';
import appConfig from "./app"
import dbConfig from '../config/db';


//IIFE immediately invoked function expression

const app:Application = express();


const server = async()=>{
    try {
        appConfig(app) //initialize app
        dbConfig();// initialize db 

        // Server listening
        app.listen(4000, ()=>{
            console.log(`Server listening on`,4000)
        })
    
        
    } catch (error:any) {
        console.log(error.message)
        
    }
  
}

server()