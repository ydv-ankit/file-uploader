import { fileModel } from "../models/file.model";
import { userModel } from "../models/user.model";
import { statusMessages } from "../utils/constants";

export const fileUpload = async (req: any, res: any) => {
    const serverUrl = process.env.ServerDomain;
    const userId = req.cookies.userId;
    const fileDetails: Object = {
        filename: req.file.filename,
        filepath: req.file.path,
        filesize: req.file.size,
        filetype: req.file.mimetype,
        fileurl: serverUrl + '/' + req.file.path,
        userId: userId,
    }
    try {
        await fileModel.create(fileDetails).then(async (resp) => {
            const fileId = resp._id;
            const respData = {
                path: resp.fileurl,
            }
            // save filedata to user collection
            await userModel.findById(userId).then(async (resp) => {
                resp?.files.push(fileId);
                await resp?.save();
                res.status(201).json({ data: respData, status: statusMessages.SUCCESS });
            })
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ data: "database error", status: statusMessages.INVALID_QUERY })
        })
    } catch (error) {
        res.status(500).json({
            data: statusMessages.SERVER_ERROR, status: statusMessages.ERROR
        })
    }
}

export const fileDetails = async (req: any, res: any) => {
    const fileId = req.params.fileId;
    try {
        await fileModel.findById(fileId).then((resp) => {
            res.status(200).json({ data: resp, status: statusMessages.SUCCESS })
        }).catch((err) => {
            res.status(404).json({ data: "not found", status: statusMessages.NOT_FOUND })
        })
    } catch (error) {
        res.status(500).json({ data: statusMessages.SERVER_ERROR, status: statusMessages.INVALID_QUERY })
    }
}