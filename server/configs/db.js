import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const client = new mongoose(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        client.connect()
            .then(() => {
                console.log('start');
            })
            .catch(err => {
                console.error('App starting error:', err.stack);
                process.exit(1)
            });
        
    
      } catch (error) {
        console.error("MongoDB connection error:", error.message);
      }
}

export default connectDB;