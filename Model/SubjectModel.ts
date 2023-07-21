import { Schema, model } from "mongoose";
import { ISubject } from "../interface/Subject";


const subjectSchema: Schema<ISubject> = new Schema({
    subjectID: {
        type: String, required: true
    },
    subjectName: {
        type: String, required: true
    },
    subjectGrade:{
        type: Number, default: 0
    }
}, {timestamps: true})

const SubjectModel = model<ISubject>("Subject", subjectSchema)
export default SubjectModel

