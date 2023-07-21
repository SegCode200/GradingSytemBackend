import { Document } from "mongoose";


export interface IAdmin extends Document{
    adminID: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    avatar: string,
    avatarID:string
    
}