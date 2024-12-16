import {Router} from 'express';
import User from '../model/user.js';
import { AddUser } from '../controller/User.controller.js'; 


const UserRouter = Router();


UserRouter.get('/',(req,res) => {
    res.send("Server is running");
})
UserRouter.post('/signup',AddUser)

export {UserRouter};