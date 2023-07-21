import { Schema, model } from "mongoose";
import { IinstructorSubject } from "../interface/InstructorSubject";


const instructorSubjectSchema: Schema<IinstructorSubject> = new Schema({
    instructorID: {type: String},
    subjectID: {type: String},
})

const InstructorModel = model<IinstructorSubject>("InstructorSubject", instructorSubjectSchema)

export default InstructorModel