const { verify } = require("jsonwebtoken");
const { User } = require("~/models/userModel");

const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      next();
    } catch (error) {
      let err = new Error(error.message);
      err.statusCode = 401;
      next(err);
    }
  } else {
    let err = new Error("Not authorized, no token");
    err.statusCode = 401;
    next(err);
  }
};
export { authGuard };
