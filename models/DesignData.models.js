import mongoose from "mongoose";

const schema = new mongoose.Schema({
 categories: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const DesignData = mongoose.model("DesignData",schema);