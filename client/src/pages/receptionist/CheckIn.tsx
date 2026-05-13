import * as React from 'react';
import { CheckCircle2, Circle, PenSquare, Upload, Key, CreditCard } from 'lucide-react';

export default function CheckIn() {
  return (
    <div className="p-10 max-w-7xl mx-auto flex flex-col h-full">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h3 className="text-[10px] tracking-widest text-[#d4af37] uppercase mb-2">Vận hành / Lễ tân</h3>
          <h1 className="text-3xl text-white font-serif">Quy trình Nhận phòng</h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-full px-4 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] text-neutral-300 uppercase tracking-widest">24 Phòng trống</span>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-full px-4 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-[10px] text-neutral-300 uppercase tracking-widest">12 Khách đến hôm nay</span>
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-1">
        {/* Left Column: Booking Summary */}
        <div className="w-80 flex flex-col gap-6 shrink-0">
          <div className="bg-[#151518] border border-neutral-800 rounded-xl p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-lg text-white font-serif">Tóm tắt Đặt phòng</h2>
              <CheckCircle2 className="text-[#d4af37]" size={20} />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Tên khách</p>
                <p className="text-neutral-200">Alexander von Humboldt</p>
              </div>
              
              <div>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Mã đặt phòng</p>
                <p className="text-[#d4af37] font-medium tracking-wider">LS-9248-VH</p>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Nhận phòng</p>
                  <p className="text-neutral-300 text-sm">Oct 12, 2023</p>
                </div>
                <div className="flex-1">
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Trả phòng</p>
                  <p className="text-neutral-300 text-sm">Oct 18, 2023</p>
                </div>
              </div>

              <div>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-2">Hạng phòng yêu cầu</p>
                <div className="flex items-center gap-3">
                  <span className="bg-[#d4af37] text-black text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">
                    Deluxe Sanctuary
                  </span>
                  <span className="text-xs text-neutral-400">Hướng rừng</span>
                </div>
              </div>

              <button className="w-full mt-4 py-3 text-xs text-[#d4af37] border border-neutral-700 hover:border-[#d4af37] flex items-center justify-center gap-2 transition-colors rounded-sm">
                <PenSquare size={14} />
                THAY ĐỔI YÊU CẦU
              </button>
            </div>
          </div>

          {/* Concierge Notes */}
          <div className="bg-[#0a0a0f] border border-neutral-800 rounded-xl p-8 flex-1">
            <h3 className="text-[10px] tracking-widest text-neutral-500 uppercase mb-4">Ghi chú từ Bộ phận Hỗ trợ</h3>
            <p className="text-neutral-400 text-sm italic leading-relaxed">
              "Khách kỷ niệm ngày cưới. Yêu cầu ga trải giường chất lượng cao và loại nước khoáng có ga cụ thể trong minibar. Khách có thể đến sớm nếu được."
            </p>
          </div>
        </div>

        {/* Right Column: Room Assignment */}
        <div className="flex-1 bg-[#151518] border border-neutral-800 rounded-xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl text-white font-serif mb-1">Chỉ định Phòng trống</h2>
              <p className="text-xs text-neutral-500">Đang lọc theo: Hạng phòng Deluxe Sanctuary</p>
            </div>
            <div className="flex gap-2 text-neutral-400">
              {/* Add some dummy filter icons if needed */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1">
            {/* Room 402 - Selected */}
            <div className="border border-[#d4af37] rounded-lg overflow-hidden bg-neutral-900 flex flex-col relative group cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <div className="absolute top-4 right-4 bg-[#e8c37c] text-black text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold z-10">
                Sẵn sàng
              </div>
              <div className="h-40 bg-neutral-800 relative">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop" alt="Room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-serif">Suite 402</h3>
                  <p className="text-[9px] text-neutral-400 uppercase tracking-widest">Deluxe Sanctuary • Khu B</p>
                </div>
              </div>
              <div className="p-4 bg-[#1a1a24] flex justify-between items-center mt-auto border-t border-neutral-800">
                <div className="flex gap-3 text-[#d4af37]">
                  <span title="AC">❄</span>
                  <span title="Wifi">📶</span>
                  <span title="Bed">🛏</span>
                </div>
                <CheckCircle2 className="text-[#d4af37]" size={20} />
              </div>
            </div>

            {/* Room 408 */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900 flex flex-col relative group cursor-pointer hover:border-neutral-600 transition-colors">
              <div className="absolute top-4 right-4 bg-[#e8c37c] text-black text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold z-10">
                Sẵn sàng
              </div>
              <div className="h-40 bg-neutral-800 relative">
                <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=400&auto=format&fit=crop" alt="Room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-serif">Suite 408</h3>
                  <p className="text-[9px] text-neutral-400 uppercase tracking-widest">Deluxe Sanctuary • Khu B</p>
                </div>
              </div>
              <div className="p-4 bg-[#151518] flex justify-between items-center mt-auto border-t border-neutral-800 text-neutral-500">
                <div className="flex gap-3">
                  <span title="AC">❄</span>
                  <span title="Wifi">📶</span>
                  <span title="Bed">🛏</span>
                </div>
                <Circle size={20} />
              </div>
            </div>

            {/* Room 312 */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900 flex flex-col relative group cursor-pointer hover:border-neutral-600 transition-colors">
              <div className="absolute top-4 right-4 bg-[#e8c37c] text-black text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold z-10">
                Sẵn sàng
              </div>
              <div className="h-40 bg-neutral-800 relative">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop" alt="Room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-serif">Suite 312</h3>
                  <p className="text-[9px] text-neutral-400 uppercase tracking-widest">Deluxe Sanctuary • Khu A</p>
                </div>
              </div>
              <div className="p-4 bg-[#151518] flex justify-between items-center mt-auto border-t border-neutral-800 text-neutral-500">
                <div className="flex gap-3">
                  <span title="AC">❄</span>
                  <span title="Wifi">📶</span>
                  <span title="Bed">🛏</span>
                </div>
                <Circle size={20} />
              </div>
            </div>

            {/* Upgrade Option */}
            <div className="border border-dashed border-[#d4af37]/30 rounded-lg bg-[#d4af37]/5 flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-[#d4af37]/10 transition-colors text-center">
              <Upload className="text-[#d4af37] mb-4" size={24} />
              <h3 className="text-[#d4af37] text-lg font-serif mb-1">Tùy chọn Nâng cấp</h3>
              <p className="text-[10px] text-[#d4af37]/70 uppercase tracking-widest mb-4">Master Estate Suite</p>
              <p className="text-sm text-neutral-300">+ $250 / đêm</p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Key className="text-[#d4af37]" size={20} />
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Thẻ khóa đã cấp</p>
                  <p className="text-sm text-neutral-300">(UID: 8824)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="text-[#d4af37]" size={20} />
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Tạm giữ thẻ</p>
                  <p className="text-sm text-neutral-300">Hoàn tất</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="px-8 py-3 text-xs text-neutral-400 uppercase tracking-widest border border-neutral-700 hover:border-neutral-500 rounded-sm transition-colors">
                Giữ Phòng
              </button>
              <button className="px-8 py-3 text-xs text-black uppercase tracking-widest bg-[#e8c37c] hover:bg-[#d4af37] rounded-sm font-bold transition-colors shadow-lg shadow-[#d4af37]/20">
                Hoàn tất Nhận phòng
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex justify-center gap-8">
        <div className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e8c37c]"></div>
          Đã chọn
        </div>
        <div className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="w-2.5 h-2.5 rounded-full border border-neutral-500"></div>
          Có sẵn
        </div>
        <div className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
          Đang sử dụng
        </div>
        <div className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="w-2.5 h-2.5 rounded-full bg-red-900/50"></div>
          Bảo trì
        </div>
      </div>
    </div>
  );
}
