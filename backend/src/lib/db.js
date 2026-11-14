import mongoose from "mongoose";

const connectDBS = async function connectDB() {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL is Reequired");
    }
    const con = await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB", con.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectDBS;
