import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Phòng Nghỉ', href: '/rooms' },
    { name: 'Ẩm Thực', href: '/dining' },
    { name: 'Dịch Vụ Spa', href: '/spa' },
    { name: 'Dịch Vụ Khác', href: '/services' },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Mobile Menu */}
          <div className="flex xl:hidden items-center flex-shrink-0">
            <button className="text-[#0a3a2a] hover:text-[#cba052] transition-colors">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center flex-shrink-0 justify-center flex-grow xl:flex-grow-0 xl:justify-start">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col items-center xl:items-start text-center xl:text-left hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-serif text-[#0a3a2a] leading-none uppercase tracking-wide">La Selva</span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-[#cba052] uppercase mt-1">Premium Hotel</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[12px] font-semibold tracking-wider uppercase transition-colors hover:text-[#cba052] relative py-8",
                  (location.pathname === link.href || (link.href === '/' && location.pathname === '/'))
                    ? "text-[#cba052]"
                    : "text-[#0a3a2a]"
                )}
              >
                {link.name}
                {((location.pathname === link.href) || (link.href === '/' && location.pathname === '/')) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#cba052]" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center space-x-6">
            <a href="tel:+842439264511" className="flex items-center text-[#0a3a2a] hover:text-[#cba052] transition-colors text-sm font-semibold">
              <Phone size={16} className="mr-2" />
              +84 24 3926 4511
            </a>
            <Link to="/rooms" className="px-6 py-2.5 bg-[#0a3a2a] text-white text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-[#cba052] transition-colors shadow-md">
              Đặt Phòng Ngay
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
