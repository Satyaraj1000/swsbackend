import { UserDetail } from "../models/userDetail.models.js";

export const uploadUserData = async (req, res) => {
  try {
    const userData = req.body;

    const user = new UserDetail(userData);
    await user.save();

    res.status(201).json({
      message: "Data saved",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const users = await UserDetail.find();

    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
