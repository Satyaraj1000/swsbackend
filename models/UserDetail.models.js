import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        default : 'Na',
    },
    number : {
        type : String,
        required : true,
    },
    budget : {
        type : String,
        default : 'Na',
    },
    proDesc : {
        type : String,
        required : true,
    },
});

export const UserDetail = mongoose.model("UserDetail",schema);
