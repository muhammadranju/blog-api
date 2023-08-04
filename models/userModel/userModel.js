import { Schema, model } from "mongoose";
import moment from "moment";
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  full_name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
  },
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

const User = model("User", userSchema);
export default User;
