import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Login() {
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
        body: JSON.stringify({ email, password, role: 'guest' }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Đăng nhập thất bại');
        return;
      }

      login(data.user);
      navigate('/');
    } catch (err) {
      setError('Lỗi kết nối máy chủ');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590490359854-df0a28f870fa?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Hotel" 
          className="w-full h-full object-cover filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-[#f8f9f8]/95 backdrop-blur-xl p-10 md:p-14 w-[90%] max-w-[500px] rounded-[32px] shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-neutral-900 mb-2">
            La Selva Premium
          </h1>
          <p className="text-sm text-neutral-500 font-medium">Cổng Khách Hàng</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-xs text-red-500 text-center font-bold">{error}</p>}
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">
              Địa chỉ Email
            </label>
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-white border border-neutral-200 p-4 text-sm outline-none focus:border-[#0a3a2a] transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                Mật khẩu
              </label>
              <a href="#" className="text-[10px] font-bold text-[#cba052] hover:text-[#0a3a2a] transition-colors">
                Quên mật khẩu?
              </a>
            </div>
            <input 
              type="password" 
              placeholder="Nhập mật khẩu" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-white border border-neutral-200 p-4 text-sm outline-none focus:border-[#0a3a2a] transition-colors"
            />
          </div>

          <button type="submit" className="w-full bg-[#0a3a2a] text-white py-4 flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#072a1e] transition-colors shadow-lg group">
            Đăng Nhập
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative flex items-center justify-center mb-8 mt-10">
          <div className="absolute w-full h-px bg-neutral-200"></div>
          <span className="relative bg-[#f8f9f8] px-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Hoặc tiếp tục với
          </span>
        </div>

        <button className="w-full bg-neutral-100 text-neutral-700 py-4 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-neutral-200 transition-colors mb-8 border border-neutral-200">
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
              <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
              <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
              <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
            </g>
          </svg>
          Đăng nhập bằng Google
        </button>

        <p className="text-center text-xs text-neutral-600 font-medium">
          Chưa có tài khoản? <Link to="/register" className="font-bold text-[#0a3a2a] hover:underline">Tạo tài khoản</Link>
        </p>
      </motion.div>
    </div>
  );
}
