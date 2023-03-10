import mongoose from "mongoose";

const DB_URI = "";

const dbConfig = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(`connected to database on port ${conn.connection.host}`);
  } catch (error) {
    console.log(`failed to connect to database`);
  }
};

export default dbConfig;
