import mongoose from 'mongoose';

const mongoURI = process.env.VITE_DB_URL as string;
// this is used for development only
// const mongoURI = import.meta.env.VITE_DB_URL as string;

export const connectDB = async () => {
  const maxAttempts = 5;
  const retryInterval = 10000;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await mongoose.connect(mongoURI);
      console.log('MongoDB connected');
      return;
    } catch (err) {
      console.error(`Attempt ${attempt} failed: MongoDB connection error:`, err);
      if (attempt < maxAttempts) {
        console.log(`Retrying in ${retryInterval/1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, retryInterval));
      } else {
        console.log('Failed to connect to MongoDB after several attempts.');
        process.exit(1);
      }
    }
  }
};
