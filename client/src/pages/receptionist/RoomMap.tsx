import * as React from 'react';
import { Settings, User, Brush, CheckCircle2 } from 'lucide-react';

export default function RoomMap() {
  return (
    <div className="p-10 max-w-7xl mx-auto flex gap-8">
      {/* Left side: Room Map grid */}
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-2xl text-white font-serif mb-2">Sơ đồ Phòng trực tuyến</h1>
          <p className="text-sm text-neutral-400">Trạng thái phòng và khu nghỉ dưỡng La Selva theo thời gian thực.</p>
        </div>

        {/* Legend inline */}
        <div className="flex gap-6 mb-10 text-[10px] uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500/80"></div>Có sẵn</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500/80"></div>Đang sử dụng</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500/80"></div>Chưa dọn</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400/80"></div>Bảo trì</div>
        </div>

        {/* West Wing */}
        <div className="mb-12">
          <h3 className="text-[#d4af37] font-serif mb-6 text-lg">Khu biệt thự Tây (West Wing)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Room 101 */}
            <div className="bg-[#151518] border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors group">
              <div className="p-4 flex justify-between items-center relative z-10">
                <span className="text-xl text-white font-serif">101</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-green-500/30 text-green-500 rounded bg-green-500/5">Có sẵn</span>
              </div>
              <div className="h-40 relative">
                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="room" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-widest text-neutral-400">King Suite</span>
              </div>
            </div>

            {/* Room 102 */}
            <div className="bg-[#151518] border border-blue-900/30 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors flex flex-col">
              <div className="p-4 flex justify-between items-center">
                <span className="text-xl text-white font-serif">102</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-blue-500/30 text-blue-400 rounded bg-blue-500/10">Đang sử dụng</span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center border-b border-neutral-800/50">
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Khách hiện tại</p>
                <p className="text-sm text-neutral-200">Gia đình Al-Fayed</p>
              </div>
              <div className="p-3 bg-neutral-900/50 flex justify-between items-center text-[10px] text-neutral-500">
                <span>Trễ: 14 Thg10</span>
                <User size={12} />
              </div>
            </div>

            {/* Room 103 */}
            <div className="bg-[#151518] border border-amber-900/30 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors flex flex-col relative overflow-hidden">
              <div className="p-4 flex justify-between items-center">
                <span className="text-xl text-white font-serif">103</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-amber-500/30 text-amber-500 rounded bg-amber-500/10">Chưa dọn</span>
              </div>
              <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
                <Brush size={24} className="text-amber-500/70 mb-3" />
                <p className="text-[9px] uppercase tracking-widest text-amber-500/80">Đang dọn dẹp</p>
              </div>
              <div className="h-1 bg-neutral-800">
                <div className="h-full bg-amber-500 w-2/3"></div>
              </div>
            </div>

            {/* Room 104 */}
            <div className="bg-[#151518] border border-red-900/30 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors flex flex-col">
              <div className="p-4 flex justify-between items-center">
                <span className="text-xl text-neutral-400 font-serif">104</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-red-400/30 text-red-400 rounded bg-red-400/10">Bảo trì</span>
              </div>
              <div className="p-4 flex-1">
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Vấn đề đã báo cáo</p>
                <p className="text-sm text-neutral-300">Lỗi máy lạnh - B3</p>
              </div>
              <div className="p-3 bg-neutral-900/50 flex items-center gap-2 text-[10px] text-red-400/80 border-t border-neutral-800/50">
                <Settings size={12} />
                <span>Hoàn tất dự kiến: 2 GIỜ</span>
              </div>
            </div>

          </div>
        </div>

        {/* East Wing */}
        <div>
          <h3 className="text-[#d4af37] font-serif mb-6 text-lg">Khu vườn Đông (East Wing)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Room 201 */}
            <div className="bg-[#151518] border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors group">
              <div className="p-4 flex justify-between items-center relative z-10">
                <span className="text-xl text-white font-serif">201</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-green-500/30 text-green-500 rounded bg-green-500/5">Có sẵn</span>
              </div>
              <div className="h-32 relative">
                <img src="https://images.unsplash.com/photo-1595526114101-23d242c75a4d?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" alt="room" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Room 202 */}
            <div className="bg-[#151518] border border-blue-900/30 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors flex flex-col">
              <div className="p-4 flex justify-between items-center border-b border-neutral-800/50">
                <span className="text-xl text-white font-serif">202</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-blue-500/30 text-blue-400 rounded bg-blue-500/10">Đang sử dụng</span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center">
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Khách hiện tại</p>
                <p className="text-sm text-neutral-200">Elena Petrov</p>
              </div>
            </div>
            
            {/* Room 203 */}
            <div className="bg-[#151518] border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors group">
              <div className="p-4 flex justify-between items-center relative z-10">
                <span className="text-xl text-white font-serif">203</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-green-500/30 text-green-500 rounded bg-green-500/5">Có sẵn</span>
              </div>
              <div className="h-32 relative">
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" alt="room" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Room 204 */}
            <div className="bg-[#151518] border border-blue-900/30 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors flex flex-col">
              <div className="p-4 flex justify-between items-center border-b border-neutral-800/50">
                <span className="text-xl text-white font-serif">204</span>
                <span className="text-[8px] uppercase tracking-wider px-2 py-0.5 border border-blue-500/30 text-blue-400 rounded bg-blue-500/10">Đang sử dụng</span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center">
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Khách hiện tại</p>
                <p className="text-sm text-neutral-200">Sarah Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Sidebar metrics */}
      <div className="w-72 shrink-0 flex flex-col gap-8">
        
        {/* Operational Overview */}
        <div className="bg-[#0a0a0f] border border-neutral-800 rounded-xl p-6">
          <h3 className="text-[10px] tracking-widest text-[#d4af37] uppercase mb-6">Tổng quan Vận hành</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#151518] rounded-md p-4 flex flex-col justify-center items-center text-center border border-neutral-800">
              <span className="text-2xl text-white font-serif mb-1">14</span>
              <span className="text-[8px] uppercase tracking-widest text-neutral-500 leading-tight">Trống<br/>Sẵn sàng</span>
            </div>
            <div className="bg-[#151518] rounded-md p-4 flex flex-col justify-center items-center text-center border border-neutral-800">
              <span className="text-2xl text-white font-serif mb-1">42</span>
              <span className="text-[8px] uppercase tracking-widest text-neutral-500">Đang sử dụng</span>
            </div>
            <div className="bg-[#151518] rounded-md p-4 flex flex-col justify-center items-center text-center border border-neutral-800">
              <span className="text-2xl text-[#d4af37] font-serif mb-1">08</span>
              <span className="text-[8px] uppercase tracking-widest text-neutral-500 leading-tight">Cần<br/>Dọn dẹp</span>
            </div>
            <div className="bg-[#151518] rounded-md p-4 flex flex-col justify-center items-center text-center border border-neutral-800">
              <span className="text-2xl text-red-400 font-serif mb-1">02</span>
              <span className="text-[8px] uppercase tracking-widest text-neutral-500 leading-tight">Đang<br/>Bảo trì</span>
            </div>
          </div>
        </div>

        {/* Service Updates */}
        <div className="bg-[#0a0a0f] border border-neutral-800 rounded-xl p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] tracking-widest text-[#d4af37] uppercase">Cập nhật Dịch vụ</h3>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>

          <div className="space-y-6 flex-1">
            {/* Update 1 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center shrink-0 mt-1 text-green-500">
                <CheckCircle2 size={14} />
              </div>
              <div>
                <p className="text-xs text-neutral-300 leading-relaxed"><span className="text-[#d4af37] font-semibold">Phòng 301</span> hiện đã Sẵn sàng</p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">2 phút trước • Buồng phòng</p>
              </div>
            </div>

            {/* Update 2 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-900/30 flex items-center justify-center shrink-0 mt-1 text-amber-500">
                <Brush size={14} />
              </div>
              <div>
                <p className="text-xs text-neutral-300 leading-relaxed">Đang tiến hành dọn <span className="text-[#d4af37] font-semibold">Phòng 105</span></p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">15 phút trước • Mã NV: 442</p>
              </div>
            </div>

            {/* Update 3 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center shrink-0 mt-1 text-blue-400">
                <User size={14} />
              </div>
              <div>
                <p className="text-xs text-neutral-300 leading-relaxed">Trả phòng Nhanh: <span className="text-[#d4af37] font-semibold">Phòng 202</span></p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">45 phút trước • Khóa điện tử</p>
              </div>
            </div>
            
             {/* Update 4 */}
             <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center shrink-0 mt-1 text-red-400">
                <Settings size={14} />
              </div>
              <div>
                <p className="text-xs text-neutral-300 leading-relaxed">Yêu cầu sửa chữa <span className="text-red-400 font-semibold">Phòng 408</span></p>
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">1 giờ trước • Thợ nước</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-3 border border-neutral-800 text-[10px] text-neutral-400 uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-colors rounded-sm">
            Xem tất cả lịch sử
          </button>
        </div>

      </div>
    </div>
  );
}
