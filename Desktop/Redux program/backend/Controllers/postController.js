const fs = require('fs');
const postModel = require('../Models/postModel');
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const SECRET_KEY = process.env.SECRET_KEY;

const createPost = async (req, res) => {
    const token = req.cookies.token;
    if(!token) {
      return res.status(401).json({
        message: 'You need to be logged in to create a post'
      });
    }
    try {
      const { title, summary, fullText } = req.body;
      const image = req.file;    
      //let's renamae the file
      const {originalname, path} = image;
      const extension = originalname.split('.').pop();
      const newFileName = `${path}.${extension}`;
      fs.renameSync(path, newFileName);
      //let's set the authores is from the cookie
      const decoded = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(decoded.id);
      if (!user) {
          return res.status(404).json({
               message: 'User not found'
          });
      }
      // Now store all files to the database
      const postData = await postModel.create({
        title,
        summary,
        fullText,
        image: newFileName,
        author: user._id
      })
      if(!postData) {
        throw new Error('An error occurred while creating the post');
      }

      res.json({ message: 'Post created successfully!', postData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const displayPosts = async (req, res) => {
    try {
      const posts = await postModel.find()
                                   .populate('author', ['name'])
                                   .sort({createdAt: -1})
                                   .limit(20)
      if(!posts) {
        throw new Error('An error occurred while retrieving the posts');
      }
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: error.message });
    }
}

const displayPost = async (req, res) => {
  const token = req.cookies.token;
  const decoded = token? jwt.verify(token, SECRET_KEY): "";
  let userLoggedin = token? await User.findById(decoded.id) : "";  
  const { id } = req.params;
  const postData = await postModel.findById(id).populate('author', ['name']);
  const responseData = {
    ...postData._doc,
    userId: userLoggedin._id,
    userName: userLoggedin.name,
    usrEmail: userLoggedin.email 
  }
  if(!postData) {
    throw new Error('An error occurred while retrieving the post');
  }
    res.json(responseData);
}

const editPost = async (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, SECRET_KEY);
  const userLoggedin = token ? await User.findById(decoded.id) : "";
  const { postId, title, summary, fullText } = req.body;
  const image = req.file;

  // Rename the file
  const { originalname, path } = image;
  const extension = originalname.split('.').pop();
  const newFileName = `${path}.${extension}`;
  fs.renameSync(path, newFileName);

  // Find the post first
  const post = await postModel.findById(postId);

  // Check if the user is the author of the post
  if (userLoggedin._id.toString() !== post.author.toString()) {
    return res.status(401).json({ message: 'You are not authorized to edit this post' });
  }

  try {
    // Find the post by ID and update it with the new data
    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      {
        $set: {
          title: title,
          summary: summary,
          image: newFileName,
          fullText: fullText,
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({
      user: userLoggedin,
      message: 'Post updated successfully',
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deletePost = async(req, res) => {
  const { id } = req.params;
   try{
    // let's find and dlete
    const deletedPost = await postModel.findByIdAndDelete(id);
    if(!deletedPost){
      return res.status(404).json({message: "Post not Found!"})
    }
    res.status(200).json({
      message: `A post is deleted successfully!`,
      deletedPost
    })
   }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Server error' });
   }
}
// export all functions to route
module.exports = {
    createPost,
    displayPosts,
    displayPost,
    editPost,
    deletePost,
}