import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import Landing from './pages/Landing';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import Dining from './pages/Dining';
import Spa from './pages/Spa';
import AdminDashboard from './pages/admin/Dashboard';
import AdminRooms from './pages/admin/AdminRooms';
import AdminBookings from './pages/admin/AdminBookings';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRegister from './pages/admin/AdminRegister';
import ReceptionistLogin from './pages/receptionist/ReceptionistLogin';
import ReceptionistRegister from './pages/receptionist/ReceptionistRegister';
import ReceptionistLayout from './components/receptionist/Layout';
import Reservations from './pages/receptionist/Reservations';
import CheckIn from './pages/receptionist/CheckIn';
import RoomMap from './pages/receptionist/RoomMap';
import CheckOut from './pages/receptionist/CheckOut';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin') && location.pathname !== '/admin/login' && location.pathname !== '/admin/register';
  const isReceptionist = location.pathname.startsWith('/receptionist') && location.pathname !== '/receptionist/login' && location.pathname !== '/receptionist/register';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/admin/login' || location.pathname === '/admin/register' || location.pathname === '/receptionist/login' || location.pathname === '/receptionist/register';

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdmin && !isReceptionist && !isAuthPage && <Navbar />}
      {isAdmin && <Sidebar />}
      {/* We can also add a Sidebar for Receptionist later if needed, right now we just hide Navbar */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
}

function ReceptionistRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user || user.role !== 'receptionist') {
    return <Navigate to="/receptionist/login" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="/admin/rooms" element={<AdminRoute><AdminRooms /></AdminRoute>} />
            <Route path="/admin/bookings" element={<AdminRoute><AdminBookings /></AdminRoute>} />
            
            {/* Receptionist Routes */}
            <Route path="/receptionist/login" element={<ReceptionistLogin />} />
            <Route path="/receptionist/register" element={<ReceptionistRegister />} />
            
            <Route path="/receptionist" element={<ReceptionistRoute><ReceptionistLayout /></ReceptionistRoute>}>
              <Route index element={<Navigate to="/receptionist/reservations" replace />} />
              <Route path="dashboard" element={<Navigate to="/receptionist/reservations" replace />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="check-in" element={<CheckIn />} />
              <Route path="room-map" element={<RoomMap />} />
              <Route path="check-out" element={<CheckOut />} />
            </Route>
            
            {/* Fallback */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}
