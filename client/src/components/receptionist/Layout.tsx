import * as React from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Users, Map as MapIcon, ConciergeBell, Search, Bell, Mail, Calendar as CalendarIcon, LogOut, CheckSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ReceptionistLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Đặt phòng', path: '/receptionist/reservations', icon: CalendarDays },
    { name: 'Trả phòng', path: '/receptionist/check-out', icon: CheckSquare },
    { name: 'Danh sách khách', path: '/receptionist/guests', icon: Users },
    { name: 'Sơ đồ phòng', path: '/receptionist/room-map', icon: MapIcon },
    { name: 'Dịch vụ hỗ trợ', path: '/receptionist/concierge', icon: ConciergeBell },
  ];

  return (
    <div className="flex h-screen bg-[#18181b] text-neutral-200 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0f] flex flex-col flex-shrink-0 border-r border-neutral-800/50">
        <Link to="/receptionist/reservations" className="p-8 block hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-serif tracking-[0.15em] uppercase text-[#d4af37] mb-1">
            La Selva
          </h1>
          <p className="text-xs text-neutral-500">Cổng Lễ Tân</p>
        </Link>

        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={`flex items-center gap-4 px-8 py-3 text-sm transition-colors ${
                      isActive 
                        ? 'text-[#d4af37] bg-neutral-900/40 border-l-2 border-[#d4af37]' 
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/20 border-l-2 border-transparent'
                    }`}
                  >
                    <item.icon size={18} className={isActive ? "text-[#d4af37]" : "text-neutral-500"} />
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-neutral-800/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-[#d4af37] font-semibold">{user?.name?.charAt(0) || 'R'}</span>
              )}
            </div>
            <div>
              <p className="text-sm text-neutral-200 font-medium">{user?.name || 'Lễ Tân'}</p>
              <p className="text-[10px] text-neutral-500">Nhân viên Lễ tân</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-3 text-xs text-neutral-400 hover:text-white transition-colors w-full px-2"
          >
            <LogOut size={16} />
            Đăng Xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#18181b]">
        {/* Topbar */}
        <header className="h-20 flex items-center justify-between px-10 border-b border-neutral-800/50 bg-[#151518]">
          <div className="flex items-center gap-8 flex-1">
            <h2 className="text-[#d4af37] font-serif text-lg">Quản lý Lễ Tân</h2>
            <div className="relative w-96 hidden md:block">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input 
                type="text" 
                placeholder="Tìm mã đặt phòng hoặc tên khách..." 
                className="w-full bg-[#0a0a0f] border border-neutral-800 rounded-md py-2 pl-12 pr-4 text-sm text-neutral-300 placeholder-neutral-600 outline-none focus:border-[#d4af37]/50 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-neutral-400">
              <button className="hover:text-white transition-colors"><Bell size={18} /></button>
              <button className="hover:text-white transition-colors"><Mail size={18} /></button>
              <button className="hover:text-white transition-colors"><CalendarIcon size={18} /></button>
            </div>
            <button className="bg-[#e8c37c] hover:bg-[#d4af37] text-black text-xs font-bold tracking-wider px-6 py-2.5 rounded-sm transition-colors">
              NHẬN PHÒNG
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
