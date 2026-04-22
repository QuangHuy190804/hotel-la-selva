import * as React from 'react';
import { Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dining() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] w-full flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" 
            alt="Foods & Beverage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Ẩm Thực
          </h1>
          <p className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase block font-semibold">
            La Selva Premium Hotel
          </p>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-24 px-4 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>
          <div className="md:pl-8">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest mb-4 block">Trải Nghiệm Ẩm Thực</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3a2a] mb-6">Nhà Hàng</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Thưởng thức buffet hoặc thực đơn gọi món với sự kết hợp hoàn hảo của ẩm thực Á - Âu. Nhà hàng của chúng tôi mang đến một không gian thanh lịch và ấm cúng, là nơi lý tưởng để bắt đầu ngày mới với bữa sáng ngon miệng hoặc tận hưởng một bữa tối lãng mạn.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#cba052] mr-3 mt-0.5" />
                <div>
                  <p className="text-[#0a3a2a] font-semibold">Mỗi Ngày, 6:00 SA - 10:00 CH</p>
                  <p className="text-neutral-500 text-sm">Ăn sáng: 6:00 SA - 09:30 SA</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#cba052] mr-3" />
                <a href="tel:+84965808676" className="text-[#0a3a2a] font-semibold hover:text-[#cba052] transition-colors">(+84) 965808676</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#cba052] mr-3" />
                <a href="mailto:laselvavn@gmail.com" className="text-[#0a3a2a] font-semibold hover:text-[#cba052] transition-colors">laselvavn@gmail.com</a>
              </div>
            </div>

            <button className="px-8 py-3 bg-[#0a3a2a] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#cba052] transition-colors inline-block">
              Đặt bàn ngay
            </button>
          </div>
        </div>
      </section>

      {/* Lobby Lounge Section */}
      <section className="py-24 px-4 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 md:pr-8">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest mb-4 block">Thư Giãn & Nghỉ Ngơi</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3a2a] mb-6">Sảnh Chờ</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Lấp lánh giữa trái tim Hà Nội, với ánh nắng chan hòa chiếu qua những ô cửa kính. Khu vực Sảnh chờ (Lobby Lounge) là địa điểm lý tưởng để gặp gỡ bạn bè, thảo luận công việc, hay chỉ đơn giản là thư giãn với một tách cà phê hoặc trà hảo hạng.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-[#cba052] mr-3" />
                <p className="text-[#0a3a2a] font-semibold">Mỗi Ngày, 6:00 SA - 10:00 CH</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#cba052] mr-3" />
                <a href="tel:+84965808676" className="text-[#0a3a2a] font-semibold hover:text-[#cba052] transition-colors">(+84) 965808676</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#cba052] mr-3" />
                <a href="mailto:laselvavn@gmail.com" className="text-[#0a3a2a] font-semibold hover:text-[#cba052] transition-colors">laselvavn@gmail.com</a>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-transparent border border-[#0a3a2a] text-[#0a3a2a] text-xs font-bold tracking-wider uppercase hover:bg-[#0a3a2a] hover:text-white transition-colors inline-block">
              Tìm hiểu thêm
            </button>
          </div>
          <div className="order-1 md:order-2 relative h-[500px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Lobby Lounge" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a3a2a] text-white pt-20 pb-10 px-4 md:px-8">
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
    </div>
  );
}
