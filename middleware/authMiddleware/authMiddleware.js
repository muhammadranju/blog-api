import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization || req.cookies.access_token;
    const { user_id } = jwt.verify(token, process.env.JWT_SECRET);
    if (!user_id) {
      return res.status(401).json({
        error: {
          status: 401,
          statusText: false,
          message: "Unauthorized Invalid token",
        },
      });
    }
    req.userId = user_id;
    return next();
  } catch (error) {
    return res.status(401).json({
      error: {
        status: 401,
        statusText: false,
        message: "Unauthorized Invalid token or token does not exist",
      },
    });
  }
};

export default authMiddleware;
