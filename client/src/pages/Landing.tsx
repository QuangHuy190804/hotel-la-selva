import * as React from 'react';
import { Calendar, User, ChevronRight, Star } from 'lucide-react';
import { MOCK_ROOMS } from '../constants';
import { RoomCard } from '../components/RoomCard';
import { Link, useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [showGuests, setShowGuests] = React.useState(false);

  const handleSearch = () => {
    const totalGuests = adults + children;
    navigate(`/rooms?guests=${totalGuests}&checkIn=${checkIn}&checkOut=${checkOut}`);
  };
  return (
    <div className="min-h-screen bg-[#fcfdfc] w-full flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="La Selva Premium Hotel Lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4 block font-semibold">Chào Mừng Đến Với</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            La Selva Premium Hotel
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Sự kết hợp tuyệt vời giữa nét cổ điển hoàng gia và vẻ đẹp hiện đại ngay giữa lòng Phố Cổ Hà Nội.
          </p>
        </div>

        {/* Booking Widget Overlay */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl bg-white shadow-2xl z-20 flex flex-col md:flex-row border border-neutral-100">
          
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-neutral-100 hover:bg-neutral-50 transition-colors group relative">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest block mb-2">Ngày Đến</span>
            <div className="flex items-center text-[#0a3a2a]">
              <Calendar size={18} className="mr-3 text-neutral-400 group-hover:text-[#cba052] transition-colors" />
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent font-semibold text-sm outline-none w-full text-neutral-800"
              />
            </div>
          </div>

          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-neutral-100 hover:bg-neutral-50 transition-colors group relative">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest block mb-2">Ngày Đi</span>
            <div className="flex items-center text-[#0a3a2a]">
              <Calendar size={18} className="mr-3 text-neutral-400 group-hover:text-[#cba052] transition-colors" />
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent font-semibold text-sm outline-none w-full text-neutral-800"
              />
            </div>
          </div>

          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-neutral-100 transition-colors group relative cursor-pointer" onClick={() => setShowGuests(!showGuests)}>
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest block mb-2">Khách</span>
            <div className="flex items-center text-[#0a3a2a]">
              <User size={18} className="mr-3 text-neutral-400 group-hover:text-[#cba052] transition-colors" />
              <span className="font-semibold text-sm">{adults} Người lớn, {children} Trẻ em</span>
            </div>
            
            {showGuests && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-neutral-200 shadow-xl z-30 p-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold">Người lớn</span>
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-black" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                    <span className="w-4 text-center text-sm">{adults}</span>
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-black" onClick={() => setAdults(adults + 1)}>+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Trẻ em</span>
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-black" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                    <span className="w-4 text-center text-sm">{children}</span>
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-black" onClick={() => setChildren(children + 1)}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={handleSearch} className="flex-1 bg-[#0a3a2a] text-white p-6 font-bold tracking-widest uppercase hover:bg-[#cba052] transition-colors flex items-center justify-center text-sm">
            Kiểm Tra Phòng
          </button>
        </div>
      </section>

      {/* Spacer for overlapping widget */}
      <div className="h-24 md:h-32"></div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 text-[#cba052]">
            <Star size={20} fill="currentColor" className="mx-1" />
            <Star size={20} fill="currentColor" className="mx-1" />
            <Star size={20} fill="currentColor" className="mx-1" />
            <Star size={20} fill="currentColor" className="mx-1" />
            <Star size={20} fill="currentColor" className="mx-1" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0a3a2a] mb-8">Khách Sạn</h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            Tọa lạc trên phố Cầu Gỗ ngay khu vực trung tâm Phố Cổ Hà Nội, La Selva Premium Hotel là một sự kết hợp hoàn hảo giữa nét kiến trúc hiện đại và cổ điển. Mặt trước khách sạn mang đến góc nhìn sinh động về cuộc sống nhộn nhịp của người dân thủ đô, trong khi mặt sau là tầm nhìn ngoạn mục ra Hồ Hoàn Kiếm, Đền Ngọc Sơn và Cầu Thê Húc - ba biểu tượng lịch sử vô giá của Hà Nội.
          </p>
          <button className="text-[#0a3a2a] border-b border-[#0a3a2a] pb-1 font-semibold text-sm uppercase tracking-wider hover:text-[#cba052] hover:border-[#cba052] transition-colors inline-flex items-center">
            Khám Phá Thêm <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section className="py-24 px-4 md:px-8 bg-neutral-50/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest mb-4 block">Chỗ Nghỉ</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3a2a]">Phòng Nghỉ</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Features/Amenities Section */}
      <section className="py-24 px-4 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[600px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
              alt="Nhà Hàng" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>
          <div className="order-1 md:order-2 md:pl-8">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest mb-4 block">Trải Nghiệm Ẩm Thực</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3a2a] mb-6">Nhà Hàng & Sảnh Chờ</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Thưởng thức buffet hoặc thực đơn gọi món (A la carte) với sự kết hợp hoàn hảo của ẩm thực Á - Âu. Nằm giữa lòng Hà Nội nhộn nhịp, khu vực sảnh chờ (Lobby Lounge) của chúng tôi là nơi lý tưởng để thư giãn, đắm mình dưới những tia nắng lấp lánh xuyên qua khung cửa kính.
            </p>
            <Link to="/dining" className="px-8 py-3 bg-transparent border border-[#0a3a2a] text-[#0a3a2a] text-xs font-bold tracking-wider uppercase hover:bg-[#0a3a2a] hover:text-white transition-colors inline-block">
              Khám Phá Ẩm Thực
            </Link>
          </div>
        </div>
      </section>

      {/* Spa Section */}
      <section className="py-24 px-4 max-w-[1400px] mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="md:pr-8">
            <span className="text-[10px] font-bold text-[#cba052] uppercase tracking-widest mb-4 block">Sức Khỏe</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a3a2a] mb-6">Dịch Vụ Spa</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Một không gian bình yên trong khách sạn, nơi tâm hồn bạn tìm thấy sự thanh lọc. Làm trọn vẹn trải nghiệm khó quên tại Hà Nội bằng cách thả lỏng cơ thể qua các liệu pháp Spa tại La Selva Premium Hotel, với sự kết hợp giữa nghi thức truyền thống độc đáo của Việt Nam và các kỹ thuật chăm sóc sức khỏe hiện đại.
            </p>
            <Link to="/spa" className="px-8 py-3 bg-transparent border border-[#0a3a2a] text-[#0a3a2a] text-xs font-bold tracking-wider uppercase hover:bg-[#0a3a2a] hover:text-white transition-colors inline-block">
              Khám Phá Spa
            </Link>
          </div>
          <div className="relative h-[600px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
              alt="Spa" 
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
