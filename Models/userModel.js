import mongoose from "mongoose";

const User = mongoose.Schema({
    name:String,
    email: String,
    password: String,
});

const UserModel = mongoose.model("UserModel", User);

export default UserModel;

