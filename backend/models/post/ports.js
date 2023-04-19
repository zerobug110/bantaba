 const mongoose = require("mongoose")

 const {Schema} = mongoose;

  const postSchema = new Schema(
    {
        content: String,
        image: {
            type: Arrayy,
            required: true,
        },
        likes: {
            type: " mongoose.Types.ObjectId",
            ref: "user"
        },
        comment: [
            {
            type: mongoose.Types.ObjectId,
            ref: "comment"
            }
        ],
        reports: [
            {
                type: "mongoose.Types.ObjectId",
                ref: "user",
            }
        ]
    },
    {
        timestamps: true,
    }
  )

  module.exports = mongoose.model("post", postSchema);