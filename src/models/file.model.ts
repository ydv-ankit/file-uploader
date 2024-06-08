import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
    },
    filetype: {
        type: String
    },
    filepath: {
        type: String
    },
    filesize: {
        type: Number
    }
}, {
    timestamps: true
})

const fileModel = mongoose.model("file", fileSchema);

export { fileModel };