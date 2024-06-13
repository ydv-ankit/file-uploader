import { statusMessages } from "../utils/constants.js";
import { userModel } from "../models/user.model"

export const newUser = async (req: any, res: any) => {
    const { username, email, password } = req.body;

    try {
        await userModel.create({ username, email, password }).then((user) => {
            res.status(201).json({ data: user, status: statusMessages.SUCCESS })
        }).catch((err) => {
            let errorMessage;
            if (err.keyValue?.username) {
                errorMessage = "username already exists"
            } else if (err.keyValue?.email) {
                errorMessage = "email already exists"
            }
            res.status(400).json({ data: errorMessage, status: statusMessages.ERROR })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: statusMessages.SERVER_ERROR, status: statusMessages.ERROR })
    }
}

export const getUser = async (req: any, res: any) => {
    const { userId } = req.params;
    try {
        const user = await userModel.findById(userId);
        if (user)
            res.cookie("userId", user._id).status(200).json({ data: user, status: statusMessages.SUCCESS })
        else
            res.status(404).json({ data: statusMessages.INVALID_QUERY, status: statusMessages.NOT_FOUND })
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: statusMessages.SERVER_ERROR, status: statusMessages.ERROR })
    }
}