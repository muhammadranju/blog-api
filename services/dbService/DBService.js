import User from "../../models/userModel/userModel.js";
import Comment from "../../models/commentModel/commentModel.js";
import Post from "../../models/postsModel/postsModel.js";

function creates(name, obj) {
  this.name = name.toLowerCase();
  if (name === "user") {
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
}

function find(name) {
  this.name = name.toLowerCase();

  if (name === "user") {
    return User.find();
  }

  if (name === "post") {
    return Post.find().populate("author", "-password -__v").select("-__v");
  }

  if (name === "comment") {
    return Comment.find();
  }
}

function findOne(id, name) {
  this.name = name.toLowerCase();
  if (name === "user") {
    return User.findOne(id);
  }

  if (name === "post") {
    return Post.findOne({ id });
  }

  if (name === "comment") {
    return Comment.findOne({ id });
  }
}

export default { creates, find, findOne };

class Make {
  constructor(name, object, id) {
    this.name = name;
    this.object = object;
    this.id = id;
  }

  creates() {
    this.name = name.toLowerCase();
    if (this.name === "user") {
      const user = new User({ ...obj });
      return user;
    }

    if (this.name === "comment") {
      const comment = new Comment({ ...obj });
      return comment;
    }

    if (this.name === "post") {
      const post = new Post({ ...obj });
      return post;
    }
  }

  find() {
    this.name = name.toLowerCase();

    if (this.name === "user") {
      return User.find();
    }

    if (this.name === "post") {
      return Post.find().populate("author", "-password -__v").select("-__v");
    }

    if (this.name === "comment") {
      return Comment.find();
    }
  }
  findOne() {
    this.name = name.toLowerCase();
    if (this.name === "user") {
      return User.findOne(this.id);
    }

    if (this.name === "post") {
      return Post.findOne({ id });
    }

    if (this.name === "comment") {
      return Comment.findOne({ id });
    }
  }
}
