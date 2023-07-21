import { Schema, model } from "mongoose";
import { IInstructor } from "../interface/Instructor";


const instructorSchema: Schema<IInstructor> = new Schema({
    lastName: {
        type: String, required: true
    },
    firstName: { type: String, required: true},
    instructorID: { type: String},
    password: { type: String, required: true}
})

export const InstructorModel = model<IInstructor>("Instructor", instructorSchema)
