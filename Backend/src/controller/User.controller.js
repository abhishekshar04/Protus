import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../model/user.js";
import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const AddUser = asyncHandler( async (req,res) => {
    const {id,name,email,password,skills} = req.body;

    if (
        [id,name,email,password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ name }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const user = await User.create({
        id,
        name,
        email, 
        password,
        skills
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
})


export {AddUser};
