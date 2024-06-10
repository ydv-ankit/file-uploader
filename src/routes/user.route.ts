import { Router } from "express";
import { getUser, newUser } from "../controllers/user.controller.js";

const router: Router = Router();

router.post("/new", newUser);
router.get("/user/:userId", getUser);

// exports
export default router;