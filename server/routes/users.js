import express from "express"
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users";
import { verifyToken } from "../middleware/auth";

const router = express.Router();
// Get
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend)


export default router;