import { Schema, model } from "mongoose";
import { IStudent } from "../interface/Student";


const studentSchema: Schema<IStudent> = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    className: {type: String, required: true}, 
    studentID: {type: String, required: true},
    age: {type: Number, required: true},
    department: {type: String, required: true},
    term: {type: String, required: true},
    registrationDate: {
        type: String, 
    },
    password: {type: String, required: true}
}) 

const StudentModel = model<IStudent>('Student', studentSchema)
export default StudentModel