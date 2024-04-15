import mongoose from "mongoose";

const URI = process.env.MONGODB_URI

if (!URI) {
    throw new Error(
        "⚠️ Define the MONGODB_URI at .env file"
    )
}

// Connect to MongoDB
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(URI)
        if (connection.readyState === 1) {
            console.log("🚀 Connected to MongoDB");
            return Promise.resolve(true)
        }
    } catch (error) {
        console.error("⛔ Error connecting to MongoDB", error);
        return Promise.reject(error)
    }
}