import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  capacity: { type: Number, required: true },
  amenities: [{ type: String }],
  images: [{ type: String }],
  location: { type: String },
  status: { type: String, enum: ['available', 'maintenance', 'occupied'], default: 'available' },
  size: { type: String },
  view: { type: String },
  ward: { type: String },
  beds: { type: String },
  isRareFind: { type: Boolean, default: false }
}, { timestamps: true });

roomSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const Room = mongoose.model('Room', roomSchema);
