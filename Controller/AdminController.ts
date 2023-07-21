import AdminModel from "../Model/AdminModel";
import {Request,Response} from "express"
import bcrypt from "bcrypt"
import { IAdmin } from "../interface/Admin";
import cloudinary from "../config/Cloudinary";



export const CreateAdmin = async(req:any, res:Response):Promise<Response> =>{
    try {
        const {lastName, firstName, password,email} = req.body 
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const {secure_url, public_id} = await cloudinary.uploader.upload(req?.file.path!)

        const Admin = await AdminModel.create({
            lastName,
            firstName,
            password: hash,
            email,
            avatar: secure_url,
            avatarID: public_id
        })
        return res.status(201).json({message: "Admin created", 
    data: Admin})

    } catch (error) {
        return res.status(500).json({message: "Unable to create Admin"})
        
    }
}

export const SiginAdmin = async(req:Request, res:Response):Promise<Response> =>{
    try {
        const {email,password} = req.body
        const user = await AdminModel.findOne({email})
        

        if(user){
            const compare = await bcrypt.compare(password,user?.password! )
            if(compare!){
                return res.status(200).json({message: "You just signed in Successfully!",
                data: user._id
            })
            }else{
                return res.status(400).json({message: "You just enter an incorrect password"})

            }


        }else{
            return res.status(400).json({message: "Enter a valid Email please"})
        }
        
    } catch (error) {
        return res.status(500).json({message: "Unable to Signin Admin, check properly"})
        
    }
}

export const GetallAdmins = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const Admin = await AdminModel.find()
        return res.status(200).json({message: "List of all Admin users",
        data : Admin
    })
        
    } catch (error) {
        return res.status(500).json({
            message: "Unable to view all Admin "
        })
        
    }
}

export const GetoneAdmin = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {AdminID} = req.params
        const Admin = await AdminModel.findById(AdminID)
        return res.status(200).json({message: "Admin successfully found",
        data : Admin
    }) 
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}
export const DeleteoneAdmin = async(req:Request, res:Response):Promise<Response>=>{
    try {
        const {AdminID} = req.params
        const Admin = await AdminModel.findByIdAndDelete(AdminID)
        return res.status(200).json({message: "Admin deleted successfully",
        data : Admin
    }) 
        
    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}

export const UpdateoneAdmin= async (req:Request, res:Response):Promise<Response> => {
    try {
        const {AdminID} = req.params
        const {firstName,lastName} = req.body
        const update = await AdminModel.findByIdAndUpdate(
            AdminID,
            {
                firstName,lastName
            
            },
            {new:true}
        )
        return res.status(201).json({message: "Admin Updated", data: update})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

