import * as React from 'react';
import { Reservation } from '../../types';
import { formatCurrency, cn } from '../../lib/utils';
import { Check, XCircle } from 'lucide-react';

export default function AdminBookings() {
  const [bookings, setBookings] = React.useState<Reservation[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    fetch('/api/bookings')
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const updateStatus = (id: string, status: string) => {
    fetch(`/api/bookings/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
      .then(res => res.json())
      .then(() => fetchBookings())
      .catch(err => console.error(err));
  };

  return (
    <div className="flex-grow min-h-screen bg-neutral-50 p-8 lg:ml-72">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-1 italic">Lịch Đặt Phòng</h1>
          <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest font-sans">Quản lý duyệt/hủy đặt phòng</p>
        </div>
      </header>

      <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-50/50">
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Khách</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Liên hệ</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Phòng</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Thời gian</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400">Trạng thái</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-neutral-400 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {loading ? (
                <tr><td colSpan={6} className="text-center py-8">Đang tải...</td></tr>
              ) : bookings.map((res) => (
                <tr key={res.id} className="hover:bg-neutral-50/30 transition-colors group">
                  <td className="px-6 py-4 font-medium text-sm text-neutral-900">{res.guestName}</td>
                  <td className="px-6 py-4 text-xs text-neutral-500">
                    <div>{res.guestEmail}</div>
                    <div>{res.guestPhone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-500">{res.roomName}</td>
                  <td className="px-6 py-4 text-xs font-mono text-neutral-500">
                    {new Date(res.checkIn).toLocaleDateString()} → {new Date(res.checkOut).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      res.status === 'confirmed' ? "bg-emerald-50 text-emerald-600" :
                      res.status === 'pending' ? "bg-blue-50 text-blue-600" :
                      res.status === 'cancelled' ? "bg-red-50 text-red-600" :
                      "bg-neutral-50 text-neutral-500"
                    )}>
                      {res.status === 'confirmed' ? 'Đã XN' : 
                       res.status === 'pending' ? 'Chờ XN' : 
                       res.status === 'cancelled' ? 'Đã Hủy' : res.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    {res.status === 'pending' && (
                      <>
                        <button onClick={() => updateStatus(res.id, 'confirmed')} className="p-2 bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100 transition-colors" title="Duyệt">
                          <Check size={16} />
                        </button>
                        <button onClick={() => updateStatus(res.id, 'cancelled')} className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors" title="Hủy">
                          <XCircle size={16} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && !loading && (
                <tr><td colSpan={6} className="text-center py-8 text-neutral-400">Không có đặt phòng nào.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
