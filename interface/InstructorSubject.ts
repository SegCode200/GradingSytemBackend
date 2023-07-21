import { Document } from "mongoose";

export interface IinstructorSubject extends Document{
    instructorID: string
    subjectID: string
    
}