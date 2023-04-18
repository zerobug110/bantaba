const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            maxlength: 25,
        },
        username: {
            type: String,
            required: true,
            trim: true,
            maxlength: 25,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        },
        role: {
            type: String,
            default: user,
        },
        gender: {
            type: String,
            default: male,
        },
        address: {
            type: String,
            default: "",
        },
        saved: [
            {
            type: mongoose.Type.objectId,
            ref: "post",
            },
        ],
        story: {
            type:  String,
            default: "",
            maxlength: 250,
        },
        followers: [
            {
                type: mongoose.Types.objectId,
                ref: "user"
            }
        ],
        following: [
            {
                type: mongoose.Types.objectId,
                ref: "user",
            },
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("user", userSchema);