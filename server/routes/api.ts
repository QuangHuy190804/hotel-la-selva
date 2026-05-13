import express from 'express';
import { Room } from '../models/Room.js';
import { Reservation } from '../models/Reservation.js';
import { User } from '../models/User.js';

const router = express.Router();

// Get all rooms
router.get('/rooms', async (req, res) => {
  try {
    const { capacity } = req.query;
    const filter: any = {};
    if (capacity) {
      filter.capacity = { $gte: Number(capacity) };
    }
    const rooms = await Room.find(filter);
    res.json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get room by ID
router.get('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    console.error('Error fetching room:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a reservation
router.post('/bookings', async (req, res) => {
  try {
    const { roomId, guestName, guestEmail, guestPhone, checkIn, checkOut, guests, totalPrice } = req.body;
    
    // Find room to get name
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const reservation = new Reservation({
      roomId,
      guestName,
      guestEmail,
      guestPhone,
      roomName: room.name,
      checkIn,
      checkOut,
      guests,
      totalPrice,
      status: 'pending'
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bookings (Admin)
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Reservation.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update booking status (Admin)
router.patch('/bookings/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Reservation.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get Dashboard Metrics (Admin)
router.get('/metrics', async (req, res) => {
  try {
    const totalReservations = await Reservation.countDocuments();
    const activeGuests = await Reservation.countDocuments({ status: { $in: ['confirmed', 'active'] } });
    const totalInventory = await Room.countDocuments();
    const availableRooms = await Room.countDocuments({ status: 'available' });
    
    const reservations = await Reservation.find({ status: { $in: ['confirmed', 'completed'] } });
    const revenue = reservations.reduce((sum, res) => sum + res.totalPrice, 0);

    res.json({
      totalReservations,
      activeGuests,
      totalInventory,
      availableRooms,
      revenue
    });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
