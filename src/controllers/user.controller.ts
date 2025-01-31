import { Request, Response } from "express";
import {
  getUserRepo,
  createUserRepo,
  deleteUserRepo,
  updateUserRepo,
} from "../repositories/user.repository";
import { IuserInterface } from "../database/interfaces/user.interface";

export const getUserController = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  console.log(userId)
  try {
    const user = await getUserRepo(userId);
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(500).json({ error: "Use Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const user: IuserInterface = req.body;

  try {
    const success = await createUserRepo(user);
    if (success) {
      res.status(200).json({ data: user });
    } else {
      res.status(500).json({ error: "Use Not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};


export const updateUserController = async (req: Request, res: Response) => {
    const updateduser: IuserInterface = req.body;
  
    try {
      const success = await updateUserRepo(updateduser.uid, updateduser);
      if (success) {
        res.status(200).json({ data: "User Updated" });
      } else {
        res.status(500).json({ error: "Use Not Updated" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
};

export const deleatUserController = async (req: Request, res: Response) => {
    const userId = req.params.userId as string;
  
    try {
      const success = await deleteUserRepo(userId);
      if (success) {
        res.status(200).json({ data: "User Deleted" });
      } else {
        res.status(500).json({ error: "Use Not Deleted" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
};


  
