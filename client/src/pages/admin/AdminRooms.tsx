import * as React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Room } from '../../types';
import { formatCurrency, cn } from '../../lib/utils';

export default function AdminRooms() {
  const [rooms, setRooms] = React.useState<Room[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/rooms')
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-grow min-h-screen bg-neutral-50 p-8 lg:ml-72">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-1 italic">Quản Lý Phòng</h1>
          <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest font-sans">Quản trị kho phòng khách sạn</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg">
          <Plus size={16} />
          Thêm Phòng Mới
        </button>
      </header>

      <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-50/50">
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Hình ảnh</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Tên phòng</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Loại phòng</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Giá / đêm</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Trạng thái</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {loading ? (
                <tr><td colSpan={6} className="text-center py-8">Đang tải...</td></tr>
              ) : rooms.map((room) => (
                <tr key={room.id} className="hover:bg-neutral-50/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden border border-neutral-100">
                      <img src={room.images?.[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'} alt={room.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-neutral-900">{room.name}</td>
                  <td className="px-6 py-4 text-sm text-neutral-500">{room.type}</td>
                  <td className="px-6 py-4 text-sm font-bold text-neutral-900">{formatCurrency(room.pricePerNight)}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      room.status === 'available' ? "bg-emerald-50 text-emerald-600" :
                      room.status === 'occupied' ? "bg-amber-50 text-amber-600" : "bg-neutral-50 text-neutral-500"
                    )}>
                      {room.status === 'available' ? 'Trống' : room.status === 'occupied' ? 'Đang Ở' : 'Bảo Trì'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-neutral-400 hover:text-blue-600 transition-colors"><Edit2 size={16} /></button>
                    <button className="p-2 text-neutral-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
