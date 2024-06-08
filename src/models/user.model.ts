import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    files: {
        type: Number
    },
})

const userModel = mongoose.model('user', userSchema)

export { userModel };