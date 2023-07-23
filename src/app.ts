import express,{ Application } from "express";
import admin from '../route/AdminRoute';
import cors from "cors"


const appConfig = (app:Application)=>{
    app.use(cors({
        origin: "*"
    }));
    // Middleware configuration
    app.use(express.json())

    // admin route
    app.use("/api/admin", admin)

}
export default appConfig;

