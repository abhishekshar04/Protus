import express from "express"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

import { UserRouter } from "./route/user.route.js"

app.use('/',UserRouter)


export {app};