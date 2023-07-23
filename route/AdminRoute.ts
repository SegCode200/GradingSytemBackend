import {Router} from "express"
import { CreateAdmin, GetallAdmins, SiginAdmin } from "../Controller/AdminController"


const router = Router()

router.route("/AdminRegister").post(CreateAdmin)
router.route("/SignAdmin").post(SiginAdmin)
router.route("/getallAdmin").get(GetallAdmins)

export default router