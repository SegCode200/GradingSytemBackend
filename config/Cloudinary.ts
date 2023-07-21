import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv"
dotenv.config()
          
cloudinary.config({ 
  cloud_name: process.env.ClOUD_NAME , 
  api_key:process.env.ClOUD_APIKEY , 
  api_secret: process.env.ClOUD_SECRETKEY,
  secure: true,
})
export default   cloudinary