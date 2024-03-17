import User from "../models/userModel";

const GetInformationUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user_search = await User.findOne({ id });
    const user = user_search[0];
    if (user_search.length === 0) {
      res.status(400).json({
        message: "User doesn't exist",
      });
    } else {
      res.status(200).json({
        message: "Search successfully",
        data: {
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
export { GetInformationUser };
