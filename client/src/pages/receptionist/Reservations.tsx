import * as React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function Reservations() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h3 className="text-[10px] tracking-widest text-[#d4af37] uppercase mb-2">Quản lý</h3>
        <h1 className="text-2xl text-white font-serif">Đặt phòng</h1>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="px-6 py-1.5 text-xs text-[#d4af37] border border-[#d4af37] rounded-full">Tất cả</button>
        <button className="px-6 py-1.5 text-xs text-neutral-400 border border-neutral-700 hover:border-neutral-500 rounded-full transition-colors">Đã xác nhận</button>
        <button className="px-6 py-1.5 text-xs text-neutral-400 border border-neutral-700 hover:border-neutral-500 rounded-full transition-colors">Đang chờ</button>
        <button className="px-6 py-1.5 text-xs text-neutral-400 border border-neutral-700 hover:border-neutral-500 rounded-full transition-colors">Đã hủy</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* New Booking Card */}
        <div className="border border-dashed border-neutral-700 rounded-lg p-10 flex flex-col items-center justify-center text-center hover:border-[#d4af37]/50 transition-colors cursor-pointer group bg-[#151518]/50">
          <div className="w-12 h-12 rounded-md border border-neutral-700 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
            <Plus className="text-neutral-400 group-hover:text-[#d4af37]" />
          </div>
          <h3 className="text-white mb-2">Đặt phòng mới</h3>
          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            Đăng ký thủ công cho khách đến trực tiếp hoặc qua điện thoại
          </p>
        </div>

        {/* Confirmed Booking Card */}
        <Link to="/receptionist/check-in" className="block bg-[#151518] border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-neutral-800">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Guest" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between relative">
              <div className="absolute top-6 right-6 border border-[#d4af37] text-[#d4af37] text-[9px] px-2 py-0.5 uppercase tracking-wider">
                Đã xác nhận
              </div>
              <div>
                <h3 className="text-white text-lg mb-1">Eleanor Thorne</h3>
                <p className="text-[#d4af37] text-xs tracking-wider">MÃ #LS-49210</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Nhận - Trả phòng</p>
                  <p className="text-xs text-neutral-300">Oct 12 — Oct 18, 2023</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Loại phòng</p>
                  <p className="text-xs text-neutral-300">Garden Sanctuary Wing</p>
                </div>
                <div>
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Số khách</p>
                  <p className="text-xs text-neutral-300">2 Người lớn</p>
                </div>
              </div>
              <div className="absolute top-16 right-6 text-right">
                <p className="text-xl text-white font-serif">$1,450.00</p>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest">Tổng cộng</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Pending Deposit Card */}
        <div className="bg-[#151518] border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-[#d4af37] font-serif text-xl border border-neutral-700">
                AM
              </div>
              <div>
                <h3 className="text-white">Arthur Morgan</h3>
                <p className="text-[#d4af37] text-xs tracking-wider">MÃ #LS-49215</p>
              </div>
            </div>
            <div className="border border-[#e8c37c] text-[#e8c37c] text-[9px] px-2 py-0.5 uppercase tracking-wider">
              Chờ đặt cọc
            </div>
          </div>
          
          <div className="space-y-4 text-xs">
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500 uppercase tracking-widest text-[9px]">Lịch trình</span>
              <span className="text-neutral-300">Oct 15 — Oct 20 (5 Đêm)</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500 uppercase tracking-widest text-[9px]">Phòng</span>
              <span className="text-neutral-300">Riverside Pavilion #08</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-2 text-xs text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors rounded-sm">
              ĐỔI LỊCH
            </button>
            <button className="flex-1 py-2 text-xs text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-colors rounded-sm">
              XÁC NHẬN
            </button>
          </div>
        </div>

        {/* Cancelled Booking Card */}
        <div className="bg-[#151518]/50 border border-neutral-800/50 rounded-lg p-6 opacity-60">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center border border-neutral-700 opacity-50 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Liam" />
              </div>
              <div>
                <h3 className="text-neutral-400">Liam Sterling</h3>
                <p className="text-neutral-500 text-xs tracking-wider">MÃ #LS-48112</p>
              </div>
            </div>
            <div className="border border-neutral-700 text-neutral-500 text-[9px] px-2 py-0.5 uppercase tracking-wider">
              Đã hủy
            </div>
          </div>
          
          <div className="space-y-4 text-xs">
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-600 uppercase tracking-widest text-[9px]">Lý do</span>
              <span className="text-neutral-400 italic">Khách bận việc đột xuất</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-600 uppercase tracking-widest text-[9px]">Lịch cũ</span>
              <span className="text-neutral-500 line-through">Oct 10 — Oct 12</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full py-2 text-[10px] uppercase tracking-widest text-neutral-500 border border-neutral-800/50 hover:border-neutral-700 transition-colors rounded-sm">
              Khôi phục & Đổi lịch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
