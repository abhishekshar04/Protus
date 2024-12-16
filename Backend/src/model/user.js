import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
    id :{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    skills:{
        type : [String],
        required : false
    }
});


const User = new mongoose.model('User',UserSchema);

export default User;