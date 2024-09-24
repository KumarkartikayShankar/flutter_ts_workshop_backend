import { Router } from "express";
import { getTweetController,createTweetController,deleatTweetController,updateTweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();
tweetRouter.get("/:tweetId", getTweetController)
//tweetRouter.get("/", getAllTweetsController)
tweetRouter.post("/",createTweetController)
tweetRouter.delete("/:userId", deleatTweetController)
tweetRouter.put("/", updateTweetController)

export default tweetRouter