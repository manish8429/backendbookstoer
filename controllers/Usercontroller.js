import UserModel from "../Models/userModel.js";
import bcrypt from "bcryptjs";

//  signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.json({ message: "User Alredy Exits" });
    }
    const haspass = await bcrypt.hash(password, 10);

    await UserModel.create({
      name: name,
      email: email,
      password: haspass,
    });
    return res.json({ message: "User Signup" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error" });
  }
};

//  login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
   
    if(!user){
      return res.json({ error: "email not found"})
    };
    const ispass = await bcrypt.compare(password, user.password);
    if (!ispass) {
      return res.json({ error: "Invilade Password"})
    } else {
      // Updated usage
      return res.json({ login: 'User Login' });

    }
  } catch (error) {}
};
