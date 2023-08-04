import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import serve from "../../services/dbService/DBService.js";

const userGetController = async (req, res, next) => {
  try {
    const user = await serve.find("user");
    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const userSignupPostController = async (req, res, next) => {
  try {
    const { username, full_name, image, email, password } = req.body;

    const findUser = await serve.findOne({ email }, "user");
    if (findUser) {
      return res.status(400).json({
        success: false,
        status: 400,
        error: `Email ${email} already exists!`,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = serve.creates("user", {
      username,
      full_name,
      image,
      email,
      password: hashPassword,
    });
    await user.save();

    return res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};
const userSignupLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser = await serve.findOne({ email }, "user");
    if (!findUser) {
      return res.status(400).json({
        success: false,
        status: 400,
        error: `Invalid Credentials`,
      });
    }
    const matchPassword = await bcrypt.compare(password, findUser.password);
    if (findUser.password === matchPassword) {
      return res.status(400).json({
        success: false,
        status: 400,
        error: `Invalid Credentials`,
      });
    }
    const payload = {
      user_id: findUser._id,
      isLogin: true,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("access_token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
export default {
  userGetController,
  userSignupPostController,
  userSignupLoginController,
};
