import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLogin() {
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
        body: JSON.stringify({ email, password, role: 'admin' }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Đăng nhập thất bại');
        return;
      }

      login(data.user);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Lỗi kết nối máy chủ');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans bg-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1590490359854-df0a28f870fa?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Hotel Admin" 
          className="w-full h-full object-cover filter blur-[4px] grayscale scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 p-10 md:p-14 w-[90%] max-w-[450px] rounded-[32px] shadow-2xl"
      >
        <div className="flex justify-center mb-6 text-[#cba052]">
          <div className="w-16 h-16 rounded-full bg-[#cba052]/10 flex items-center justify-center">
            <Shield size={32} />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold tracking-[0.2em] uppercase text-white mb-2">
            La Selva Premium
          </h1>
          <p className="text-xs tracking-widest uppercase text-[#cba052] font-medium">Cổng Quản Trị Viên</p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl overflow-hidden border border-neutral-700 mb-8">
          <div className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-widest text-neutral-900 bg-[#cba052]">
            Đăng Nhập
          </div>
          <Link
            to="/admin/register"
            className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors bg-transparent"
          >
            Đăng Ký
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-xs text-red-400 text-center font-bold bg-red-400/10 py-3 rounded-lg border border-red-400/20">{error}</p>}
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
              Địa chỉ Email
            </label>
            <input 
              type="email" 
              placeholder="admin@laselva.com" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 p-4 text-sm outline-none focus:border-[#cba052] focus:bg-neutral-800 transition-colors rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Mật khẩu
              </label>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 p-4 text-sm outline-none focus:border-[#cba052] focus:bg-neutral-800 transition-colors rounded-lg"
            />
          </div>

          <button type="submit" className="w-full bg-[#cba052] text-neutral-900 py-4 flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#b58c43] transition-colors rounded-lg mt-8">
            Truy Cập Quản Trị
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <a href="/" className="text-xs text-neutral-500 hover:text-white transition-colors">
            ← Quay lại trang khách hàng
          </a>
        </div>
      </motion.div>
    </div>
  );
}
