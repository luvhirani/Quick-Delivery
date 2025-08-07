import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        // Wait until the connection is established before moving forward
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        // Log only after a successful connection
        console.log("✅ Database Connected");
    
        // Optional: listen for disconnection
        mongoose.connection.on("disconnected", () => {
          console.log("MongoDB disconnected");
        });
    
      } catch (error) {
        console.error("MongoDB connection error:", error.message);
      }
}


export default connectDB;