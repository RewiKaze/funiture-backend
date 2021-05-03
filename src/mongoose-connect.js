import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_HOST, {
  // dbName: "furnishop",
  // promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
