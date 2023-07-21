import { IGrade } from "../interface/Grade";
import GradeModel from "../Model/gradeModel";
import { Request, Response } from "express";
import StudentModel from "../Model/StudentModel";
import { InstructorModel } from "../Model/InstructorModel";
import SubjectModel from "../Model/SubjectModel";


export const GradeStudent = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {studentID,instructorID,subjectID} = req.params
        const {total} = req.body 
        const student = await StudentModel.findOne({studentID})
        const Subject = await SubjectModel.findOne({subjectID})
        const instructor = await InstructorModel.findOne({instructorID})
        const Grade = await GradeModel.create({
            total
        })
        return res.status(201).json({
            message: "Grade sucessfully created",
            data: Grade
        })

        
    } catch (error) {
        return res.status(500).json({
            message: error
        })        
    }
}

export const GetStudentGrade = async(req:Request, res:Response):Promise<Response>=>{
    try {
        
    } catch (error) {
        return res.status(500).json({
            message: error
        })        

        
    }
}

