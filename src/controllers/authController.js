import { generateToken } from "~/services/jwt";
import User from "../models/userModel";
import { hash, compare } from "bcrypt";

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
    return res.status(200).json({
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

const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const userExist = await User.findOne({ email });
    compare(password, userExist[0].password, function (err, data) {
      if (userExist.length !== 0 && data) {
        const Token = generateToken({ id: userExist[0].id });
        res.status(200).json({
          message: "Login successfully",
          data: {
            email: userExist[0].email,
            name: userExist[0].name,
            avatar: userExist[0].avatar,
            token: Token,
          },
        });
      } else {
        res.status(400).json({
          message:
            "The email address or password is incorrect. Please try again",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

export { register, login };
