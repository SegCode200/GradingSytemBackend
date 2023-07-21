import { IGrade } from "../interface/Grade";
import { Schema, model } from "mongoose";


const gradeSchema: Schema<IGrade> = new Schema({
    studentID: {
        type: String,
    },
    total: {type: Number, required: true},
    subjectID: {type: String},
    instructorID: {type: String},
})

const GradeModel = model<IGrade>('Grade',gradeSchema)
export default GradeModel