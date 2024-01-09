import mongoose from "mongoose";

const connect = async () => {
   try {
   const {connection} = await mongoose.connect(process.env.MONGODB_URL);
   if (connection.readyState === 1) {
     console.log("MongoDB connected");
       return Promise.resolve(true);
   }
  } catch (error) {
   console.log(error)
   return Promise.reject(false);
  }
}

export default connect;