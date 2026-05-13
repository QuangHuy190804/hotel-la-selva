import * as React from 'react';
import { BedDouble, Coffee, Wine, Printer, PlusCircle, CreditCard, Banknote, Building, Brush } from 'lucide-react';

export default function CheckOut() {
  return (
    <div className="p-10 max-w-7xl mx-auto flex gap-8">
      
      {/* Left Area: Folio & Remarks */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="mb-4 flex justify-between items-end">
          <div>
            <h1 className="text-2xl text-white font-serif mb-2">Trả phòng</h1>
            <p className="text-sm text-neutral-400">Xem chi tiết hóa đơn Phòng 402 - Elena Sterling</p>
          </div>
          <div className="border border-green-500/30 bg-green-500/10 text-green-500 text-[9px] px-3 py-1.5 rounded-full uppercase tracking-wider font-bold flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            Đang lưu trú
          </div>
        </div>

        {/* Folio Summary Box */}
        <div className="bg-[#151518] border border-neutral-800 rounded-xl flex-1 flex flex-col">
          <div className="p-8 border-b border-neutral-800 flex justify-between items-center">
            <h2 className="text-[#d4af37] text-xs uppercase tracking-[0.2em] font-medium">Chi tiết Hóa đơn</h2>
            <button className="flex items-center gap-2 text-[#d4af37] text-xs hover:text-[#e8c37c] transition-colors">
              <PlusCircle size={14} />
              THÊM DỊCH VỤ
            </button>
          </div>

          <div className="flex-1 overflow-auto p-8 space-y-6">
            
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                <BedDouble className="text-[#d4af37]" size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-neutral-200 text-sm mb-1">Tiền phòng Suite (4 Đêm)</h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">12 Thg10 - 16 Thg10 | $850.00 / đêm</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-serif">$3,400.00</p>
                <p className="text-[9px] text-neutral-600 uppercase tracking-widest mt-1">Cố định</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-green-900/20 flex items-center justify-center shrink-0 border border-green-800/30">
                <span className="text-green-500 text-lg">🌿</span>
              </div>
              <div className="flex-1">
                <h3 className="text-neutral-200 text-sm mb-1">Massage Đặc biệt Midnight Orchid</h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">14 Thg10 | Nhân viên: Mei S.</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-serif">$280.00</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-blue-900/20 flex items-center justify-center shrink-0 border border-blue-800/30">
                <Wine className="text-blue-400" size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-neutral-200 text-sm mb-1">La Selva Dining - Bữa tối Hai người</h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">14 Thg10 | Mã đơn #9421</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-serif">$415.50</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-amber-900/20 flex items-center justify-center shrink-0 border border-amber-800/30">
                <Coffee className="text-amber-500" size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-neutral-200 text-sm mb-1">Tiêu dùng Mini-bar</h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">15 Thg10 | Kiểm tra tự động</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-serif">$42.00</p>
              </div>
            </div>

          </div>

          <div className="p-8 border-t border-neutral-800 bg-neutral-900/30">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-neutral-400 uppercase tracking-widest">Tổng phụ</span>
              <span className="text-sm text-neutral-300 font-serif">$4,137.50</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xs text-neutral-400 uppercase tracking-widest">Thuế du lịch (2%)</span>
              <span className="text-sm text-neutral-300 font-serif">$82.75</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[#d4af37] text-sm uppercase tracking-[0.2em] font-bold">Tổng tiền cần thanh toán</span>
              <span className="text-2xl text-[#d4af37] font-serif">$4,220.25</span>
            </div>
          </div>
        </div>

        {/* Staff Remarks */}
        <div className="bg-[#151518] border border-neutral-800 rounded-xl p-8">
          <h2 className="text-xs text-neutral-500 uppercase tracking-[0.15em] mb-4">Ghi chú của Nhân viên</h2>
          <textarea 
            className="w-full bg-transparent border border-neutral-800 rounded-md p-4 text-sm text-neutral-300 placeholder-neutral-700 outline-none focus:border-[#d4af37]/50 transition-colors h-24 resize-none"
            placeholder="Thêm ghi chú nội bộ về việc trả phòng này..."
          ></textarea>
        </div>

      </div>

      {/* Right Area: Payment & Actions */}
      <div className="w-80 shrink-0 flex flex-col gap-6">
        
        {/* Payment Method */}
        <div className="bg-[#0a0a0f] border border-neutral-800 rounded-xl p-6">
          <h3 className="text-[10px] tracking-widest text-[#d4af37] uppercase mb-6">Phương thức Thanh toán</h3>
          
          <div className="space-y-3">
            {/* Card 1 */}
            <label className="flex items-center justify-between p-4 border border-[#d4af37]/50 bg-[#d4af37]/5 rounded-lg cursor-pointer">
              <div className="flex items-center gap-4">
                <CreditCard className="text-neutral-400" size={18} />
                <span className="text-sm text-neutral-200">Thẻ Tín dụng / Ghi nợ</span>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
              </div>
            </label>

            {/* Card 2 */}
            <label className="flex items-center justify-between p-4 border border-neutral-800 bg-[#151518] rounded-lg cursor-pointer hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4">
                <Banknote className="text-neutral-400" size={18} />
                <span className="text-sm text-neutral-400">Thanh toán Tiền mặt</span>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-neutral-700"></div>
            </label>

            {/* Card 3 */}
            <label className="flex items-center justify-between p-4 border border-neutral-800 bg-[#151518] rounded-lg cursor-pointer hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-4">
                <Building className="text-neutral-400" size={18} />
                <span className="text-sm text-neutral-400">Chuyển khoản Ngân hàng</span>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-neutral-700"></div>
            </label>
          </div>

          <div className="mt-6 border border-dashed border-[#d4af37]/30 bg-[#d4af37]/5 rounded-lg p-4 text-center">
            <p className="text-[9px] text-[#d4af37] uppercase tracking-widest mb-1">Thẻ ưu tiên đã lưu</p>
            <p className="text-sm text-neutral-300">Thẻ Visa đuôi •••• 8812</p>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="w-full bg-[#e8c37c] hover:bg-[#d4af37] text-black py-6 rounded-lg transition-colors shadow-lg shadow-[#d4af37]/10 flex flex-col items-center gap-1">
          <span className="font-bold tracking-widest uppercase text-sm">Hoàn tất Thanh toán & Trả phòng</span>
          <span className="text-[8px] tracking-[0.2em] opacity-60">CẬP NHẬT TRẠNG THÁI THÀNH 'CHƯA DỌN'</span>
        </button>

        <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 py-6 rounded-lg transition-colors flex items-center justify-center gap-3">
          <Printer size={18} />
          <span className="font-medium tracking-widest uppercase text-sm">IN HÓA ĐƠN</span>
        </button>

        <div className="text-center mt-2">
          <button className="text-[10px] text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">
            Lưu nháp Hóa đơn
          </button>
        </div>

        {/* Current Room small preview */}
        <div className="mt-auto pt-6">
          <div className="h-24 rounded-xl overflow-hidden relative border border-neutral-800">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" alt="room" />
            <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[10px] text-neutral-300 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                Phòng 402
              </span>
              <span className="text-[9px] text-red-400 uppercase tracking-widest flex items-center gap-1">
                <Brush size={10} />
                Đánh dấu chưa dọn khi hoàn tất
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
