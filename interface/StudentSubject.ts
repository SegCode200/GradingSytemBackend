import { Document } from "mongoose";

export interface IStudentSubject extends Document{
    studentID: string;
    subjectID: string;
}