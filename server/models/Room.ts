import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

export const Room = mongoose.model('Room', roomSchema);
