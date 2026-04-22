import * as React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SlidersHorizontal, Users, Calendar } from 'lucide-react';
import { MOCK_ROOMS } from '../constants';
import { RoomCard } from '../components/RoomCard';
import { cn } from '../lib/utils';
import { useSearchParams } from 'react-router-dom';

export default function Rooms() {
  const [searchParams] = useSearchParams();
  const guestParam = searchParams.get('guests');
  const checkInParam = searchParams.get('checkIn');
  const checkOutParam = searchParams.get('checkOut');
  
  const requestedCapacity = guestParam ? parseInt(guestParam, 10) : 0;

  const [activeType, setActiveType] = React.useState('Tất Cả');
  const types = ['Tất Cả', 'Suite', 'Deluxe', 'Executive', 'Family'];

  const typeFilteredRooms = activeType === 'Tất Cả' 
    ? MOCK_ROOMS 
    : MOCK_ROOMS.filter(r => r.type === activeType);

  const filteredRooms = requestedCapacity > 0
    ? typeFilteredRooms.filter(r => r.capacity >= requestedCapacity)
    : typeFilteredRooms;

  return (
    <div className="pt-32 pb-32 w-full min-h-screen bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase font-bold tracking-[0.4em] text-neutral-400 mb-6"
          >
            Bộ Sưu Tập
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-8"
          >
            Không Gian <span className="italic font-normal">Độc Đáo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-lg leading-relaxed mb-6"
          >
            Mỗi căn phòng tại La Selva là một tuyệt tác thiết kế, kết hợp sự đổi mới đương đại với sự thoải mái vượt thời gian.
          </motion.p>
          
          {(requestedCapacity > 0 || checkInParam) && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-6 px-6 py-3 bg-[#f8f9f8] border border-neutral-200 rounded-full text-sm text-[#0a3a2a] mt-4 shadow-sm"
            >
              {checkInParam && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#cba052]" />
                  <span className="font-semibold">{checkInParam} <span className="font-normal text-neutral-400 mx-1">đến</span> {checkOutParam || '...'}</span>
                </div>
              )}
              {requestedCapacity > 0 && (
                <>
                  {checkInParam && <div className="w-px h-4 bg-neutral-300"></div>}
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#cba052]" />
                    <span className="font-semibold">{requestedCapacity} Khách</span>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-neutral-100 pb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  activeType === type 
                    ? "bg-neutral-900 text-white shadow-lg" 
                    : "bg-white border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
                )}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
              <input 
                type="text" 
                placeholder="Tìm phòng..."
                className="pl-12 pr-6 py-3 bg-white border border-neutral-200 rounded-full text-sm outline-none focus:border-neutral-900 transition-all w-full md:w-64"
              />
            </div>
            <button className="p-3 bg-white border border-neutral-200 rounded-full hover:border-neutral-900 transition-all">
              <SlidersHorizontal size={20} className="text-neutral-600" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((room, idx) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        
        {filteredRooms.length === 0 && (
          <div className="text-center py-40">
             <p className="text-neutral-400 font-serif italic text-2xl">Không tìm thấy phòng nào phù hợp với lựa chọn của bạn.</p>
          </div>
        )}
      </div>
    </div>
  );
}
