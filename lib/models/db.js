import mongoose from 'mongoose';

const MONGODB_CONNECTION = async () => {
    const URL = process.env.MONGODB_URI || "mongodb://localhost:27017/victorco";
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


export default MONGODB_CONNECTION ;