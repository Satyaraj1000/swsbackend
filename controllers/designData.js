import { DesignData } from "../models/DesignData.models.js";

export const getDesignsData = async (req, res) => {
  try {
    const category = req.query.category || "";

    const designs = await DesignData.find({
      categories: {
        $regex: category,
        $options: "i",
      },
    });
    res.status(200).json({
      designs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const postDesignsData = async (req, res) => {
  try {
    const designData = req.body;

    const design = new DesignData(designData);
    await design.save();

    res.status(200).json({
      design,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
