import {InstructorModel} from "../Model/InstructorModel";
import {Request,Response} from "express"
import bcrypt from "bcrypt"
import { IInstructor } from "../interface/Instructor";



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
        const {instructorID} = req.params
        const instructor = await InstructorModel.findById(instructorID)
        return res.status(200).json({message: "instructor successfully found",
        data : instructor
    }) 
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}
export const DeleteoneAdmin = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {instructorID} = req.params
        const instructor = await InstructorModel.findByIdAndDelete(instructorID)
        return res.status(200).json({message: "instructor deleted successfully",
        data : instructor
    }) 
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}

export const UpdateoneAdmin= async (req:Request, res:Response):Promise<Response> => {
    try {
        const {instructorID} = req.params
        const {firstName,lastName} = req.body
        const update = await InstructorModel.findByIdAndUpdate(
            instructorID,
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

