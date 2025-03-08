import mongoose from "mongoose";
const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.log("connect string not working");
}

export default async function dbConnect (){
    await mongoose.connect(MONGO_URL as string);
}