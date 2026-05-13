import * as React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, 
  Maximize2, 
  Wifi, 
  Wind, 
  Coffee, 
  Tv, 
  Waves, 
  ShieldCheck,
  ChevronLeft,
  Calendar,
  X,
  UserCircle
} from 'lucide-react';
import { Room } from '../types';
import { formatCurrency, cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

export default function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [room, setRoom] = React.useState<Room | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = React.useState(false);
  
  // Use user data if available
  const [formData, setFormData] = React.useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  React.useEffect(() => {
    fetch(`/api/rooms/${id}`)
      .then(res => res.json())
      .then(data => {
        setRoom(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleBookingClick = () => {
    if (!user) {
      alert('Vui lòng đăng nhập để đặt phòng.');
      return;
    }
    setIsCheckoutModalOpen(true);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!room) return;
    
    try {
      const payload = {
        roomId: room.id || (room as any)._id,
        guestId: user?.id,
        guestName: formData.name,
        guestEmail: formData.email,
        guestPhone: formData.phone,
        checkIn: new Date().toISOString(), // Hardcoded for demo
        checkOut: new Date(Date.now() + 86400000 * 4).toISOString(), // +4 days
        guests: 2, // Hardcoded for demo
        totalPrice: room.pricePerNight * 4 * 1.12
      };

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert('Đặt phòng thành công!');
        setIsCheckoutModalOpen(false);
        navigate('/');
      } else {
        alert('Có lỗi xảy ra khi đặt phòng.');
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi đặt phòng.');
    }
  };

  if (loading) return <div className="pt-40 text-center">Đang tải...</div>;
  if (!room) return <div className="pt-40 text-center">Không tìm thấy phòng</div>;

  const amenityIcons: Record<string, any> = {
    'Private Pool': Waves,
    'City View': Maximize2,
    'Butler Service': Users,
    'Spa Access': ShieldCheck,
    'High-speed Wi-Fi': Wifi,
    'Air Conditioning': Wind,
    'Nespresso Machine': Coffee,
    'Mini Bar': Coffee,
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Visual Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={room.images?.[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'} 
          alt={room.name} 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <Link 
          to="/rooms" 
          className="absolute top-10 left-10 z-20 flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={16} />
          Trở Lại Danh Sách
        </Link>

        <div className="absolute bottom-20 left-0 right-0 z-10 px-4">
          <div className="max-w-7xl mx-auto">
            <span className="text-white/70 uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">{room.type}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white max-w-3xl leading-tight">{room.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8 pb-4 border-b border-neutral-100">Không Gian Thiết Kế</h2>
              <p className="text-xl text-neutral-700 leading-relaxed font-serif mb-10 italic">
                {room.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-2">Số khách</span>
                  <span className="text-sm font-medium">{room.capacity} Khách</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-2">Diện tích</span>
                  <span className="text-sm font-medium">{room.size}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-2">Hướng</span>
                  <span className="text-sm font-medium">{room.view}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-2">Trạng thái</span>
                  <span className="text-sm font-medium capitalize">{room.status === 'available' ? 'Trống' : room.status}</span>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8 pb-4 border-b border-neutral-100">Tiện Ích & Dịch Vụ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(room.amenities || []).map((amenity) => {
                  const Icon = amenityIcons[amenity] || ShieldCheck;
                  return (
                    <div key={amenity} className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 bg-neutral-900 text-white rounded-3xl shadow-2xl">
              <div className="flex items-baseline justify-between mb-8">
                 <div>
                    <span className="text-3xl font-bold">{formatCurrency(room.pricePerNight)}</span>
                    <span className="text-neutral-400 text-sm ml-2">/ đêm</span>
                 </div>
                 <div className="flex items-center text-xs text-amber-400 font-bold">
                    <Calendar size={14} className="mr-1" />
                    Có Sẵn
                 </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="grid grid-cols-2 gap-px bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-800">
                   <div className="bg-neutral-900 p-4">
                      <p className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Ngày nhận phòng</p>
                      <p className="text-sm">24 Thg 5, 2024</p>
                   </div>
                   <div className="bg-neutral-900 p-4 border-l border-neutral-800">
                      <p className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Ngày trả phòng</p>
                      <p className="text-sm">28 Thg 5, 2024</p>
                   </div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800">
                   <p className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Khách</p>
                   <p className="text-sm">2 Người lớn / 1 Trẻ em</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <button 
                  onClick={handleBookingClick}
                  className="flex-1 py-5 bg-white text-neutral-900 rounded-full font-bold text-sm hover:bg-neutral-100 transition-all shadow-xl"
                >
                  Đặt Phòng Ngay
                </button>
                {!user && (
                  <Link 
                    to="/login"
                    className="flex-none flex items-center justify-center w-14 py-5 bg-[#cba052] text-white rounded-full font-bold text-sm hover:bg-[#b08842] transition-all shadow-xl"
                    title="Đăng nhập / Đăng kí"
                  >
                    <UserCircle size={24} />
                  </Link>
                )}
              </div>
              
              {!user && (
                <p className="text-center text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-4">
                  Bạn cần <Link to="/login" className="text-[#cba052] hover:underline">Đăng nhập</Link> để đặt phòng
                </p>
              )}
              {user && (
                <p className="text-center text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Bạn chưa phải thanh toán ngay</p>
              )}
              
              <div className="mt-10 pt-8 border-t border-neutral-800">
                <div className="flex justify-between text-sm mb-4">
                   <span className="text-neutral-400 underline decoration-neutral-800 underline-offset-4">4 đêm × {formatCurrency(room.pricePerNight)}</span>
                   <span>{formatCurrency(room.pricePerNight * 4)}</span>
                </div>
                <div className="flex justify-between text-sm mb-6">
                   <span className="text-neutral-400 underline decoration-neutral-800 underline-offset-4">Thuế (12%)</span>
                   <span>{formatCurrency(room.pricePerNight * 4 * 0.12)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                   <span>Tổng Cộng</span>
                   <span>{formatCurrency(room.pricePerNight * 4 * 1.12)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white max-w-xl w-full p-8 md:p-12 relative shadow-2xl rounded-2xl">
            <button 
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-serif text-center mb-8 uppercase tracking-[0.2em] relative inline-block left-1/2 -translate-x-1/2">
              THÔNG TIN ĐẶT PHÒNG
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-black"></span>
            </h2>
            
            <form onSubmit={handleBooking} className="mt-12 space-y-6">
              <input 
                type="text" 
                placeholder="Họ và tên*" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors rounded-lg" 
              />
              <input 
                type="email" 
                placeholder="Email*" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors rounded-lg" 
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại*" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors rounded-lg" 
              />
              
              <div className="text-center mt-8 pt-4">
                <button type="submit" className="w-full bg-[#0a3a2a] text-[#cba052] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#cba052] hover:text-white transition-colors rounded-full shadow-lg">
                  Xác Nhận Đặt Phòng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

