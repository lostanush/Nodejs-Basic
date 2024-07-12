const express= require("express");
const postController = require("../controllers/post")
const {createPostValidator} = require("../Validators")

const router= express.Router();

router.get("/",postController.getPosts);

router.post("/post",createPostValidator,postController.createPost);

module.exports= router; 