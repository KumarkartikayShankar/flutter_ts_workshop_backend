import mongoose from "mongoose";
import TweetModel from "../database/models/tweet.model";
import { ITweetInterface } from "../database/interfaces/tweet.interface";




export const getTweetRepo = async(tweetId: string) : Promise<ITweetInterface | null> => {
   try{
    const tweet = await TweetModel.findOne({tweetId : tweetId})
    return tweet

   }catch (error){
    console.log(error)
    return null;
   } 
};

export const deleteTweetRepo = async(tweetId: string) : Promise<boolean> => {
    try{
     const deleated = await TweetModel.findOneAndDelete({tweetId : tweetId});
     if(deleated){
        return true;
     }
     else{
        return false;
     }
     
 
    }catch (error){
     console.log(error)
     return false;
    } 
 };
 export const createTweetRepo = async (tweet: ITweetInterface) : Promise<boolean> => {
    try{
    const result = await TweetModel.create(tweet);
     if(result){
        return true
     }else{
        return false
     }
     
 
    }catch (error){
     console.log(error)
     return false;
    } 
 };

 export const updateTweetRepo = async (
    tweetId: string,
    updatedtweet: ITweetInterface) : Promise<boolean> => {
    try{
    const result =  await TweetModel.findOneAndUpdate({tweetId: tweetId},updatedtweet,{new: true});
     if(result){
        return true
     }else{
        return false
     }
     
 
    }catch (error){
     console.log(error)
     return false;
    } 
 };