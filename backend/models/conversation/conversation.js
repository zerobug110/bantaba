const mongoose = require("mongoose")

const converstionSchema = new mongoose.Schema(
    {
        recipients: [
          {
            type: mongoose.Types.ObjectId,
            ref: "user",
          },
        ],
        lastMessageAt: {
          type: Date,
        },
      },
      { timestamps: true }
)

module.exports = mongoose.model("conversation", converstionSchema);