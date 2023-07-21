import { Document } from "mongoose";


export interface IInstructor extends Document{
    firstName: string;
    lastName: string;
    instructorID: string;
    password: string;
}