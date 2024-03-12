import { generateToken } from "~/services/jwt";
import User from "../models/userModel";
import { hash } from "bcrypt";

const register = async (req, res, next) => {
  try {
    const { name, avatar, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user.length !== 0) {
      return res.status(400).json({ message: "Email already exists" });
    }
    user = new User({
      name,
      avatar,
      email,
      password,
    });
    user.password = await hash(user.password, 10);
    const newUser = await user.create();
    res.status(200).json({
      message: "Register successfully",
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        token: generateToken({ id: newUser.id }),
      },
    });
  } catch (error) {
    next(error);
  }
};
export { register };
