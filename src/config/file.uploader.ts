import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files")
    },
    filename: function (req, file, cb) {
        console.log(file);
        const lengthOfFilename = file.originalname.split('.').length;
        const fileExtension = file.originalname.split('.')[lengthOfFilename - 1];
        const filename = file.originalname.split(".")[0].trim();

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, filename + '-' + uniqueSuffix + '.' + fileExtension)
    }
})

const upload = multer({ storage: storage });

export { upload };