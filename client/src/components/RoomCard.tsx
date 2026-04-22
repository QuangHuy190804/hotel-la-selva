import * as React from 'react';
import { Heart, Info } from 'lucide-react';
import { Room } from '../types';
import { formatCurrency, cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="flex flex-col bg-white overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300 h-full border border-neutral-100 group">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Rare Find Badge */}
        {room.isRareFind && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-[#cba052]/90 text-white text-[9px] uppercase font-bold tracking-widest shadow-sm backdrop-blur-sm">
              LỰA CHỌN CAO CẤP
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-[#0a3a2a] mb-1 group-hover:text-[#cba052] transition-colors">
          {room.name}
        </h3>
        
        {room.view && (
          <p className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest mb-4">
            {room.view}
          </p>
        )}

        <div className="flex flex-wrap items-center text-[10px] text-neutral-500 uppercase tracking-wider font-semibold mb-4 gap-x-2 gap-y-1">
          <span>{room.capacity} KHÁCH</span>
          <span className="text-neutral-300">•</span>
          <span>{room.beds}</span>
          <span className="text-neutral-300">•</span>
          <span>{room.size}</span>
        </div>

        <p className="text-sm text-neutral-600 line-clamp-2 mb-6 flex-grow leading-relaxed">
          {room.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
          <div>
            <div className="text-xl font-serif text-[#0a3a2a] leading-none mb-1">
              {formatCurrency(room.pricePerNight)}
            </div>
            <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
              MỖI ĐÊM
            </div>
          </div>
          
          <Link
            to={`/rooms/${room.id}`}
            className="px-6 py-2.5 bg-transparent border border-[#0a3a2a] text-[#0a3a2a] text-xs font-bold tracking-wider uppercase hover:bg-[#0a3a2a] hover:text-white transition-colors"
          >
            XEM CHI TIẾT
          </Link>
        </div>
      </div>
    </div>
  );
};
