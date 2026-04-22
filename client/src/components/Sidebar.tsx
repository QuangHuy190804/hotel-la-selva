import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BedDouble, 
  CalendarCheck, 
  Users, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { cn } from '../lib/utils';

export function Sidebar() {
  const menuItems = [
    { name: 'Tổng Quan', icon: LayoutDashboard, href: '/admin/dashboard' },
    { name: 'Quản Lý Phòng', icon: BedDouble, href: '/admin/rooms' },
    { name: 'Đặt Phòng', icon: CalendarCheck, href: '/admin/bookings' },
    { name: 'Quản Lý Nhân Viên', icon: Users, href: '/admin/staff' },
    { name: 'Báo Cáo Doanh Thu', icon: TrendingUp, href: '/admin/analytics' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-neutral-950 text-neutral-400 border-r border-neutral-800 z-50 hidden lg:block">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-neutral-900 font-bold text-xl leading-none">L</span>
            </div>
            <span className="text-white font-serif font-bold text-lg tracking-wider italic">QUẢN TRỊ VIÊN</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow px-4 space-y-1.5">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => cn(
                "group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-white text-neutral-950 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "hover:bg-neutral-900/50 hover:text-neutral-200"
              )}
            >
              <div className="flex items-center gap-3.5">
                <item.icon size={20} className={cn(
                  "transition-colors",
                  "group-[.active]:text-neutral-950"
                )} />
                <span className="text-sm font-medium tracking-wide">{item.name}</span>
              </div>
              <ChevronRight size={14} className={cn(
                "opacity-0 transition-all duration-300 transform translate-x--2",
                "group-hover:opacity-100 group-hover:translate-x-0"
              )} />
            </NavLink>
          ))}
        </nav>

        {/* Footer info */}
        <div className="p-6 border-t border-neutral-900">
          <div className="flex items-center gap-4 mb-6 px-2">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700">
              <img src="https://picsum.photos/seed/admin/100/100" alt="Admin" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-200">Quản trị viên</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Giám Đốc Điều Hành</p>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all text-sm font-medium group">
            <LogOut size={16} className="transition-transform group-hover:-translate-x-1" />
            Đăng xuất
          </button>
        </div>
      </div>
    </aside>
  );
}
