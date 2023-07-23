import { Schema, model } from "mongoose";
import { IStudentSubject } from "../interface/StudentSubject";


const studentSubjectSchema: Schema<IStudentSubject> = new Schema({
    subjectID: {type: String},
    studentID: {type: String},
    grade:{type: String}

})

const StudentSubjectModel = model<IStudentSubject>("StudentSubject", studentSubjectSchema)

export default StudentSubjectModel