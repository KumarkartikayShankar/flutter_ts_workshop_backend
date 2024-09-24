import { Router } from "express";
import { getUserController,createUserController, deleatUserController, updateUserController } from "../controllers/user.controller";
const userRouter = Router();

userRouter.get("/:userId", getUserController)
userRouter.post("/",createUserController)
userRouter.delete("/:userId", deleatUserController)
userRouter.put("/", updateUserController)

export default userRouter