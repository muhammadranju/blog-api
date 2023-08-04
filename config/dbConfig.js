import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to MongoDB Successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongoose connection Error please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Failed to connect");
    console.log(error);
  }
};
export default connect;
