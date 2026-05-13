import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  guestId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guestName: { type: String, required: true },
  guestEmail: { type: String, required: true },
  guestPhone: { type: String, required: true },
  roomName: { type: String, required: true },
  checkIn: { type: String, required: true }, // ISO date string
  checkOut: { type: String, required: true }, // ISO date string
  guests: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'active', 'completed', 'cancelled'], default: 'pending' },
  totalPrice: { type: Number, required: true }
}, { timestamps: true });

reservationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
