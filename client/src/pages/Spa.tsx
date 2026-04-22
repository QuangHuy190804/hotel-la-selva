import * as React from 'react';
import { Phone, Mail, Clock, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Spa() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-white w-full flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight drop-shadow-lg">
            Dịch Vụ Spa
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 max-w-[1400px] mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar Info Box */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-[#f8f9f8] p-8 text-center flex flex-col items-center">
              <div className="mb-6 w-full">
                <p className="text-sm text-neutral-600 mb-1">Giờ mở cửa: 10:00 - 23:00</p>
                <p className="text-sm text-neutral-600">hàng ngày (Nhận khách cuối: 20h30)</p>
              </div>
              
              <div className="w-16 h-px bg-neutral-300 mb-8"></div>
              
              <div className="flex flex-col items-center mb-6">
                <Phone className="w-5 h-5 text-neutral-600 mb-2" strokeWidth={1.5} />
                <a href="tel:+84965808676" className="text-sm text-neutral-800 hover:text-[#cba052] transition-colors">(+84) 965808676</a>
              </div>
              
              <div className="flex flex-col items-center mb-10">
                <Mail className="w-5 h-5 text-neutral-600 mb-2" strokeWidth={1.5} />
                <a href="mailto:laselvavn@gmail.com" className="text-sm text-neutral-800 hover:text-[#cba052] transition-colors">laselvavn@gmail.com</a>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 bg-[#111111] text-[#cba052] text-xs font-bold tracking-widest uppercase hover:bg-[#cba052] hover:text-white transition-colors"
              >
                ĐẶT NGAY
              </button>
            </div>
          </div>
          
          {/* Right Image/Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="w-full h-full relative aspect-[16/9] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop" 
                alt="Hot Stone Massage" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a3a2a] text-white pt-20 pb-10 px-4 md:px-8 mt-auto">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif mb-6 text-white">La Selva Premium Hotel</h3>
            <p className="text-white/70 mb-4 max-w-sm">
              Số 1A Phố Cầu Gỗ, Quận Hoàn Kiếm, Hà Nội, Việt Nam
            </p>
            <div className="space-y-2 text-white/70">
              <p>Điện thoại: <a href="tel:+842439264511" className="hover:text-[#cba052] transition-colors">+84 24 3926 4511</a></p>
              <p>Hotline: <a href="tel:+84965808676" className="hover:text-[#cba052] transition-colors">+84 965808676</a></p>
              <p>Email: <a href="mailto:laselvavn@gmail.com" className="hover:text-[#cba052] transition-colors">laselvavn@gmail.com</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#cba052] mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/about-us" className="hover:text-white transition-colors">Về Chúng Tôi</Link></li>
              <li><Link to="/rooms" className="hover:text-white transition-colors">Phòng Nghỉ</Link></li>
              <li><Link to="/dining" className="hover:text-white transition-colors">Ẩm Thực</Link></li>
              <li><Link to="/spa" className="hover:text-white transition-colors">Dịch Vụ Spa</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#cba052] mb-6">Dịch Vụ Khác</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/tours" className="hover:text-white transition-colors">Dịch Vụ Tour</Link></li>
              <li><Link to="/airport-pickup" className="hover:text-white transition-colors">Đưa Đón Sân Bay</Link></li>
              <li><Link to="/visa" className="hover:text-white transition-colors">Visa Tại Sân Bay</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>© 2024 La Selva Premium Hotel. Bảo lưu mọi quyền.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/policy" className="hover:text-white transition-colors">Chính Sách Khách Sạn</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Chính Sách Bảo Mật</Link>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white max-w-4xl w-full p-8 md:p-12 relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-serif text-center mb-8 uppercase tracking-[0.2em] relative inline-block left-1/2 -translate-x-1/2">
              DỊCH VỤ SPA
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-black"></span>
            </h2>
            
            <form className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <select className="w-full border border-neutral-200 p-3 text-sm text-neutral-600 outline-none focus:border-black transition-colors bg-transparent">
                  <option value="">Giới tính*</option>
                  <option value="mr">Ông</option>
                  <option value="ms">Bà</option>
                </select>
                <input type="text" placeholder="Họ và tên*" className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors" />
                <input type="email" placeholder="Email*" className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="tel" placeholder="Số điện thoại*" className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors" />
                <select className="w-full border border-neutral-200 p-3 text-sm text-neutral-600 outline-none focus:border-black transition-colors bg-transparent">
                  <option value="">Số lượng khách*</option>
                  <option value="1">1 Người</option>
                  <option value="2">2 Người</option>
                  <option value="3">3 Người</option>
                  <option value="4+">4+ Người</option>
                </select>
                <input type="date" placeholder="Ngày*" className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors text-neutral-600" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select className="w-full border border-neutral-200 p-3 text-sm text-neutral-600 outline-none focus:border-black transition-colors bg-transparent">
                  <option value="">Giờ*</option>
                  {[10,11,12,13,14,15,16,17,18,19,20,21,22].map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
                <select className="w-full border border-neutral-200 p-3 text-sm text-neutral-600 outline-none focus:border-black transition-colors bg-transparent">
                  <option value="">Phút*</option>
                  {['00', '15', '30', '45'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <textarea placeholder="Lời nhắn" rows={4} className="w-full border border-neutral-200 p-3 text-sm outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>
              
              <div className="text-center mt-8 pt-4">
                <button type="button" className="bg-[#111111] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#cba052] transition-colors">
                  Hoàn Tất Đặt Lịch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
