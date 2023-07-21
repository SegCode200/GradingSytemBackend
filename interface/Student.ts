import { Document } from "mongoose"

export interface IStudent extends Document {
    firstName: string;
    lastName: string;
    studentID: string;
    age: number;
    department?: string
    term: string
    registrationDate: string
    className: string
    avatar:string,
    avatarID:string
}