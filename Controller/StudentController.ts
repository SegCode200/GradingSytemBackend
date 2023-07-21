import {Request,Response}  from "express"
import { IStudent } from "../interface/Student";
import StudentModel from "../Model/StudentModel";
import cloudinary from "../config/Cloudinary";



export const EnrollStudent = async(req:any, res:Response):Promise<Response>=>{
    try {
        const {   firstName,lastName,age,department,term,registrationDate,className
} = req.body

const ID = firstName.subString(0, 3).toUpperCase() + Math.floor(Math.random()* 1000) + lastName.subString(0,3).toUpperCase()
const {secure_url, public_id} = await cloudinary.uploader.upload(req?.file.path!)


        const student = await StudentModel.create({
            firstName,
            lastName,
            studentID :ID,
            age,
            department,
            term,
            registrationDate,
            className,
            avatar: secure_url,
            avatarID : public_id,

        })
        return res.status(201).json({
            message: "Student Added",

        })
        
    } catch (error) {
        return res.status(500).json({
            message: "can't enroll student",
            data: error
        })
        
    }
}

export const GetOneStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {ID} = req.params
        const GetStudent = await StudentModel.findById(ID)
        return res.status(200).json({
            message: "Student Gotten",
            data: GetStudent
        })
         
    } catch (error) {
        return res.status(404).json({
            message: "can't Student"
        })
        
    }
}
export const DeleteOneStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {ID} = req.params
        const Remove = await StudentModel.findByIdAndDelete(ID)
        return res.status(200).json({
            message: "Student deleted",
            data: Remove
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "can't Student"
        })
    }
}


