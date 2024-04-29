import mongoose from 'mongoose';

const MemeSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Meme = mongoose.model('Meme', MemeSchema);

export default Meme;
