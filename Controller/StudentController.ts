import {Request,Response}  from "express"
import { IStudent } from "../interface/Student";
import StudentModel from "../Model/StudentModel";
import cloudinary from "../config/Cloudinary";



export const EnrollStudent = async(req:any, res:Response):Promise<Response>=>{
    try {
        const {   firstName,lastName,age,department,term,className
} = req.body

const ID = firstName.subString(0, 3).toUpperCase() + Math.floor(Math.random()* 1000) + lastName.subString(0,3).toUpperCase()
const {secure_url, public_id} = await cloudinary.uploader.upload(req?.file.path!)
const date =  new Date().toDateString()
const StudentPassword = "StudentPassword"


        const student = await StudentModel.create({
            firstName,
            lastName,
            studentID :ID,
            age,
            department,
            term,
            password: StudentPassword ,
            registrationDate: date,
            className,
            avatar: secure_url,
            avatarID : public_id,

        })
        return res.status(201).json({
            message: "Student Added",
            data: student

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
export const updateOneStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {ID} = req.params
        const {firstName, lastName, department, age} = req.body
        const Remove = await StudentModel.findByIdAndUpdate(ID, {
            firstName, lastName, department, age
        })
        return res.status(201).json({
            message: "Student Updated",
            data: Remove
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "can't Update student"
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

export const StudentSignin = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {ID} = req.params
        const {studentID, password} = req.body
        const studentGet = await StudentModel.findOne({studentID})

        if(studentGet){
            const pass = studentGet.password!
            if(pass===password){
                return res.status(200).json({
                    message : "Student Successfully signed in"
                })
            }else{
                return res.status(500).json({
                    message: "Student passed Wrong"
                })
            }
        }else{
            return res.status(500).json({
                message: " Your entered a wrong Student ID"
            })
        
        }

        
    } catch (error) {
        return res.status(404).json({
            message: "Can't see in Student"

        })
        
    }
}


