import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,    // encrypted using bcrypt
        required: true
    },
    files: {
        type: Array // array of fileIds
    },
}, {
    timestamps: true
})

// encrypt password before saving to db using bcrypt
// userSchema.pre("save", ()=>{})

const userModel = mongoose.model('user', userSchema)

export { userModel };