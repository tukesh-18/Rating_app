import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{type:String, required:true, minlength:10, maxlength:25},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true, maxlength:400},
    password:{type:String, required:true},
    role:{type:String, enum:["admin", "user", "owner"], required:true}
}, {timestamps:true})



const userModel = mongoose.model("sample", UserSchema);
export default userModel;


