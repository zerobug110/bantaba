const mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("***************** DB Connected Successfully ***************")
    } catch (error) {
        console.log(error.message)
    }
}
dbConnect()