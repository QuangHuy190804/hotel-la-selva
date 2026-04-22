export type UserRole = 'guest' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  type: string;
  pricePerNight: number;
  capacity: number;
  amenities: string[];
  images: string[];
  location: string;
  status: 'available' | 'maintenance' | 'occupied';
  size?: string;
  view?: string;
  ward?: string;
  beds?: string;
  isRareFind?: boolean;
}

export interface Reservation {
  id: string;
  roomId: string;
  guestId: string;
  checkIn: string;
  checkOut: string;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  totalPrice: number;
  guestName: string;
  roomName: string;
}

export interface DashboardMetrics {
  totalReservations: number;
  activeGuests: number;
  totalInventory: number;
  availableRooms: number;
  revenue: number;
}
