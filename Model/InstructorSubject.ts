import { Schema, model } from "mongoose";
import { IinstructorSubject } from "../interface/InstructorSubject";


const instructorSubjectSchema: Schema<IinstructorSubject> = new Schema({
    instructorID: {type: String},
    subjectID: {type: String},
})

const InstructorSubjectModel = model<IinstructorSubject>("InstructorSubject", instructorSubjectSchema)

export default InstructorSubjectModel