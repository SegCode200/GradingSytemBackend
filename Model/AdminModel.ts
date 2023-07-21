import { model, Schema } from "mongoose";
import { IAdmin } from "../interface/Admin";

const adminSchema: Schema<IAdmin> = new Schema({
    lastName: {type: String, required: true,},
    firstName: {
        type: String, required: true,
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    adminID: {
        type: String

    }
})

const AdminModel = model<IAdmin>('Admin', adminSchema)
export default AdminModel