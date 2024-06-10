import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filetype: {
        type: String,
        required: true
    },
    filepath: {
        type: String,
        required: true
    },
    fileurl: {
        type: String,
        required: true
    },
    filesize: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const fileModel = mongoose.model("file", fileSchema);

export { fileModel };