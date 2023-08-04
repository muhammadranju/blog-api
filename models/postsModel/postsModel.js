import mongoose from "mongoose";
import moment from "moment";
import shortid from "shortid";
const { Schema, model } = mongoose;

const postsSchema = new Schema({
  short_id: {
    type: String,
    lowercases: true,
    default: shortid.generate(),
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  short_title: {
    type: String,
    lowercases: true,
    trim: true,
  },
  dest: {
    type: String,
    trim: true,
    required: true,
  },
  tags: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  thumbnail: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // comment: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Comment",
  //   trim: true,
  // },

  createdAt: {
    time_is: {
      type: String,
      default: moment().format("LTS"),
    },
    date_is: {
      type: String,
      default: moment().format("L"),
    },
    full_time: {
      type: String,
      default: moment().format("LL"),
    },
  },
});

const Posts = model("Posts", postsSchema);
export default Posts;
