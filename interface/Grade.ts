import { Document } from "mongoose";

export interface IGrade extends Document {
    total: number;
    studentID: string;
    subjectID: string;
    instructorID: string;
}