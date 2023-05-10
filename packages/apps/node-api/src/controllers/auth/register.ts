import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User";
import { RegisterDto } from "../../dto/user.dto";
import { createUser } from "../../services/user.service";

// TODO: find a better way to instantiate this repositories

export const register = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body as RegisterDto;

    createUser(req.userRepository, {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    });
  } catch (err) {
    //
    console.log(err);
  }
};
