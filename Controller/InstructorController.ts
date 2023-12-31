import {InstructorModel} from "../Model/InstructorModel";
import {Request,Response} from "express"
import bcrypt from "bcrypt"
import { IInstructor } from "../interface/Instructor";
import StudentModel from "../Model/StudentModel";
import SubjectModel from "../Model/SubjectModel";
import StudentSubjectModel from "../Model/StudentSubjectModel.ts";
import InstructorSubjectModel from "../Model/InstructorSubject";



export const CreateInstructor = async(req:Request<{},{},IInstructor>, res:Response):Promise<Response> =>{
    try {
        const {lastName, firstName} = req.body 
        const random = Math.floor(Math.random() * 1000)
        const Id:string = lastName.substring(0,2).toLowerCase() + random

        const Instructor = await InstructorModel.create({
            lastName,
            firstName,
            instructorID: Id
        })
        return res.status(201).json({message: "Instructor created", 
    data: Instructor})

    } catch (error) {
        return res.status(500).json({message: "Unable to create Instructor"})
        
    }
}

export const SiginInstructor = async(req:Request, res:Response):Promise<Response> =>{
    try {
        const {instructorID} = req.body
        const user = await InstructorModel.findOne({instructorID})
        return res.status(201).json({
            message: "Instructor has successfully sigin",
            data: user
        })
        
    } catch (error) {
        return res.status(500).json({message: "Unable to Signin Instructor, check properly"})
        
    }
}

export const GetallInstructors = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const Admin = await InstructorModel.find()
        return res.status(200).json({message: "List of all Instructors users",
        data : Admin
    })
        
    } catch (error) {
        return res.status(500).json({
            message: "Unable to view all Instructors "
        })
        
    }
}

export const Getoneinstructor = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {InstID} = req.params
        const instructor = await InstructorModel.findById(InstID)
        return res.status(200).json({message: "instructor successfully found",
        data : instructor
    }) 
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}
export const Deleteoneinstructor = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {InstID} = req.params
        const instructor = await InstructorModel.findByIdAndDelete(InstID)
        return res.status(200).json({message: "instructor deleted successfully",
        data : instructor
    }) 
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}

export const Updateoneinstructor= async (req:Request, res:Response):Promise<Response> => {
    try {
        const {InstID} = req.params
        const {firstName,lastName} = req.body
        const update = await InstructorModel.findByIdAndUpdate(
            InstID,
            {
                firstName,lastName
            
            },
            {new:true}
        )
        return res.status(201).json({message: "instructor Updated", data: update})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const InstructorGradeStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {subjectID, studentID} = req.params
        const {grade} = req.body
        const subject = await SubjectModel.findOne({subjectID})
        const student = await StudentModel.findOne({studentID})
        const Grade = await StudentSubjectModel.create({
            grade, student,subject
        })
        return res.status(201).json({
            message: "Student Graded ",
            data: Grade
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "Student Graded error occured", data: error
        })
        
    }
}

export const InstructorDeleteGradeStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {instructorID,subjectID} = req.params
        const instructor = await InstructorModel.findOne({instructorID})
        const subject = InstructorSubjectModel.create({
            instructor, 
        })
        return res.status(201).json({
            message: "Student Grading Deleted"
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error
        })
        
    }
}