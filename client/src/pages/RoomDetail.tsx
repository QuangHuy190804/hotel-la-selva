import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  Calendar
} from 'lucide-react';
import { MOCK_ROOMS } from '../constants';
import { formatCurrency, cn } from '../lib/utils';

export default function RoomDetail() {
  const { id } = useParams();
  const room = MOCK_ROOMS.find(r => r.id === id);

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
          src={room.images[0]} 
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
                {room.amenities.map((amenity) => {
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

              <button className="w-full py-5 bg-white text-neutral-900 rounded-full font-bold text-sm hover:bg-neutral-100 transition-all mb-4 shadow-xl">
                Đặt Phòng Ngay
              </button>
              <p className="text-center text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Bạn chưa phải thanh toán ngay</p>
              
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
    </div>
  );
}
