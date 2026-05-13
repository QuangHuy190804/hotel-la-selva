import * as React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  BedDouble, 
  CalendarCheck, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  MoreVertical,
  Search,
  Bell
} from 'lucide-react';
import { formatCurrency, cn } from '../../lib/utils';
import { Reservation, Room } from '../../types';

export default function AdminDashboard() {
  const [metrics, setMetrics] = React.useState<any>(null);
  const [recentBookings, setRecentBookings] = React.useState<Reservation[]>([]);
  const [rooms, setRooms] = React.useState<Room[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Promise.all([
      fetch('/api/metrics').then(res => res.json()),
      fetch('/api/bookings').then(res => res.json()),
      fetch('/api/rooms').then(res => res.json())
    ]).then(([metricsData, bookingsData, roomsData]) => {
      setMetrics(metricsData);
      setRecentBookings(bookingsData.slice(0, 5)); // Just show 5 recent
      setRooms(roomsData);
      setLoading(false);
    }).catch(console.error);
  }, []);

  if (loading || !metrics) return <div className="p-8 lg:ml-72 text-center">Đang tải dữ liệu...</div>;

  const stats = [
    { label: 'Tổng Doanh Thu', value: formatCurrency(metrics.revenue || 0), trend: '+12.5%', icon: TrendingUp, positive: true },
    { label: 'Đặt Phòng Hiện Tại', value: metrics.activeGuests || 0, trend: '+5', icon: CalendarCheck, positive: true },
    { label: 'Tỉ Lệ Lấp Đầy', value: `${Math.round(((metrics.totalInventory - metrics.availableRooms) / (metrics.totalInventory || 1)) * 100)}%`, trend: '-2%', icon: BedDouble, positive: false },
    { label: 'Đánh Giá Của Khách', value: '4.9', trend: '+0.1', icon: Users, positive: true },
  ];

  return (
    <div className="flex-grow min-h-screen bg-neutral-50 p-8 lg:ml-72">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-1 italic">Bảng Điều Khiển</h1>
          <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest font-sans">Thứ Tư, 22 Tháng 5, 2024</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative flex items-center bg-white border border-neutral-200 rounded-full px-4 py-2 w-64 shadow-sm">
            <Search size={16} className="text-neutral-400 mr-2" />
            <input 
              type="text" 
              placeholder="Tìm kiếm đặt phòng..." 
              className="bg-transparent border-none text-sm outline-none w-full"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center relative hover:bg-neutral-50 transition-colors">
            <Bell size={18} className="text-neutral-600" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-neutral-50 rounded-xl">
                <stat.icon size={20} className="text-neutral-900" />
              </div>
              <span className={cn(
                "text-[10px] font-bold px-2 py-1 rounded-full",
                stat.positive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
              )}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Reservations */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-neutral-900">Giao Dịch Gần Đây</h2>
            <button className="text-xs font-bold text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Xem tất cả</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-50/50">
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Khách</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Phòng</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Thời gian</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Trạng thái</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400 text-right">Số tiền</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50">
                {recentBookings.map((res) => (
                  <tr key={res.id} className="hover:bg-neutral-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-[10px]">
                          {res.guestName?.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-neutral-900">{res.guestName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500">{res.roomName}</td>
                    <td className="px-6 py-4 text-xs font-mono text-neutral-400">
                      {new Date(res.checkIn).toLocaleDateString()} → {new Date(res.checkOut).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                        res.status === 'confirmed' ? "bg-emerald-50 text-emerald-600" :
                        res.status === 'active' ? "bg-amber-50 text-amber-600" : "bg-neutral-50 text-neutral-500"
                      )}>
                        {res.status === 'confirmed' ? 'Đã XN' : res.status === 'active' ? 'Đang Ở' : res.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-neutral-900 text-right">{formatCurrency(res.totalPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Room Status Summary */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-neutral-900">Trạng Thái Phòng</h2>
            <div className="p-1.5 bg-neutral-50 rounded-lg">
              <MoreVertical size={16} className="text-neutral-400" />
            </div>
          </div>
          
          <div className="space-y-6">
            {rooms.map((room) => (
              <div key={room.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                    <img src={room.images[0]} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 truncate max-w-[120px]">{room.name}</h4>
                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest leading-none mt-1">{room.status === 'available' ? 'Trống' : room.status}</p>
                  </div>
                </div>
                <button className="p-2 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors">
                  <ArrowUpRight size={14} className="text-neutral-400" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-neutral-950 rounded-2xl p-6 text-white text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
             <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Trạng Thái Nâng Cấp</p>
             <h3 className="text-lg font-serif font-bold italic mb-4">Thông Tin Doanh Nghiệp</h3>
             <button className="w-full py-3 bg-white text-neutral-950 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
               Yêu Cầu Truy Cập
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
