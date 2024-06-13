import { Router } from "express";
import { upload } from "../config/file.uploader";
import { fileDetails, fileUpload } from "../controllers/file.controller";

const router: Router = Router();

// file uplaod
router.post("/upload", upload.single('file'), fileUpload);
router.get("/get/:fileId", fileDetails);

export default router;