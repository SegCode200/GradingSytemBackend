import express,{ Application } from "express";
import router from './route/userRouter';


const appConfig = (app:Application)=>{
    // Middleware configuration
    app.use(express.json())

    // route
    app.use("/api/", router)

}
export default appConfig;

