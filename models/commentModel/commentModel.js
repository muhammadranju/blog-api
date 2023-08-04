import mongoose from "mongoose";
import moment from "moment";
import shortid from "shortid";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  short_id: {
    type: String,
    default: shortid.generate(),
    lowercases: true,
  },
  posts_id: {
    type: Schema.Types.ObjectId,
    ref: "Posts",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    time_is: {
      type: String,
      default: moment().format("LTS"),
    },
    dateIs: {
      type: String,
      default: moment().format("L"),
    },
    fullTime: {
      type: String,
      default: moment().format("LL"),
    },
  },
});

const Comment = model("Comment", commentSchema);
export default Comment;
