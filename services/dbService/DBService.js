import User from "../../models/userModel/userModel.js";
import Comment from "../../models/commentModel/commentModel.js";
import Post from "../../models/postsModel/postsModel.js";

const creates = (name, obj) => {
  if (name.toLowerCase() === "user") {
    const user = new User({ ...obj });
    return user;
  }

  if (name === "comment") {
    const comment = new Comment({ ...obj });
    return comment;
  }

  if (name === "post") {
    const post = new Post({ ...obj });
    return post;
  }
};

const find = (name) => {
  //   const { user, post, comment } = users;

  if (name === "user") {
    return User.find();
  }

  if (name === "post") {
    return Post.find().populate("author");
  }

  if (name === "comment") {
    return Comment.find();
  }
};

const findOne = (id, name) => {
  if (name === "user") {
    return User.findOne(id);
  }

  if (name === "post") {
    return Post.findOne({ id });
  }

  if (name === "comment") {
    return Comment.findOne({ id });
  }
};

export default { creates, find, findOne };
