import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Key } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ReceptionistLogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      if (user.role === 'admin') navigate('/admin/dashboard');
      else if (user.role === 'receptionist') navigate('/receptionist/reservations');
      else navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: 'receptionist' }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Đăng nhập thất bại');
        return;
      }

      login(data.user);
      navigate('/receptionist/dashboard');
    } catch (err) {
      setError('Lỗi kết nối máy chủ');
    }
  };

  return (
    <div className="relative min-h-screen flex font-sans bg-[#1a1816] overflow-hidden">
      {/* Background Image - Left side */}
      <div className="absolute inset-0 z-0 opacity-50 md:opacity-100 md:w-1/2 h-full">
        <img 
          src="/reception.jpg" 
          alt="Luxury Hotel Lobby" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1816]"></div>
      </div>

      {/* Login Card - Right side */}
      <div className="relative z-10 w-full md:w-1/2 ml-auto flex flex-col justify-center px-10 sm:px-20 lg:px-32 xl:px-40 bg-[#1a1816]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2 text-[#cba052]">
            <Key size={24} />
            <h1 className="text-2xl font-serif tracking-[0.15em] uppercase text-[#cba052]">
              La Selva
            </h1>
          </div>
          <p className="text-sm tracking-wide text-neutral-400 font-light mb-12">The Midnight Sanctuary</p>

          {/* Tab switcher */}
          <div className="flex gap-8 mb-10 border-b border-neutral-800 pb-2">
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[#cba052] border-b-2 border-[#cba052] pb-2 -mb-[3px]">
              Đăng Nhập
            </div>
            <Link
              to="/receptionist/register"
              className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-300 transition-colors pb-2"
            >
              Đăng Ký
            </Link>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
            
            <div className="relative group">
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="peer w-full bg-transparent border-b border-neutral-700 text-white placeholder-transparent py-2 text-sm outline-none focus:border-[#cba052] transition-colors"
                placeholder="EMAIL ADDRESS"
              />
              <label className="absolute left-0 -top-4 text-[10px] font-medium tracking-widest text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#cba052] uppercase">
                Địa chỉ Email
              </label>
            </div>

            <div className="relative group">
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="peer w-full bg-transparent border-b border-neutral-700 text-white placeholder-transparent py-2 text-sm outline-none focus:border-[#cba052] transition-colors"
                placeholder="PASSWORD"
              />
              <label className="absolute left-0 -top-4 text-[10px] font-medium tracking-widest text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#cba052] uppercase">
                Mật khẩu
              </label>
            </div>

            <div className="flex justify-between items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 border border-neutral-600 rounded-sm flex items-center justify-center group-hover:border-[#cba052] transition-colors">
                  {/* Checked state would go here */}
                </div>
                <span className="text-[10px] font-medium tracking-widest text-neutral-400 uppercase group-hover:text-neutral-300 transition-colors">Ghi nhớ</span>
              </label>
              <a href="#" className="text-[10px] font-medium tracking-widest text-[#cba052] hover:text-[#e2bd75] transition-colors uppercase">
                Quên mật khẩu?
              </a>
            </div>

            <button type="submit" className="w-full bg-[#cba052] text-[#1a1816] py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.1em] hover:bg-[#e2bd75] transition-colors mt-8">
              ĐĂNG NHẬP
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
            <div className="mt-4">
              <a href="/" className="text-[10px] font-medium tracking-widest text-[#cba052] hover:text-[#e2bd75] transition-colors uppercase">
                ← Quay lại trang chủ
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer info absolute */}
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-light">EST. 1994</p>
        <p className="text-[10px] tracking-[0.2em] text-neutral-500 uppercase font-light mt-1">PRIVATE ESTATE</p>
      </div>
    </div>
  );
}
