import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [error, setError] = React.useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }
    if (!agree) {
      setError('Bạn cần đồng ý với điều khoản');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Đăng ký thất bại');
        return;
      }

      login(data.user);
      navigate('/');
    } catch (err) {
      setError('Lỗi kết nối máy chủ');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Side: Image Header for Mobile, Side Image for Desktop */}
      <div className="w-full md:w-1/2 relative bg-black flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d23a1?q=80&w=1974&auto=format&fit=crop" 
            alt="Hotel View" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 p-8 text-white flex justify-between items-start w-full">
          <h1 className="text-xl font-bold tracking-[0.2em] uppercase">La Selva Premium</h1>
          <a href="mailto:support@laselva.com" className="text-sm font-medium hover:text-[#cba052] transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Hỗ trợ
          </a>
        </div>
        
        <div className="relative z-10 p-8 text-white pb-20 md:pb-12">
          <p className="text-sm md:text-base font-medium max-w-sm leading-relaxed">
            Bắt đầu hành trình của bạn.<br />
            Sự sang trọng và đẳng cấp đang chờ đón.
          </p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 bg-[#fcfcfc] flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[480px]">
          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-3">Tạo Tài Khoản</h2>
            <p className="text-neutral-500 font-medium">Tham gia vào hệ thống khách sạn độc quyền của chúng tôi.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            {error && <p className="text-sm text-red-500 font-bold bg-red-50 p-3 border border-red-100">{error}</p>}
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">
                Họ và Tên
              </label>
              <input 
                type="text" 
                placeholder="Nguyễn Văn A" 
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-white border border-neutral-200 p-4 text-sm outline-none focus:border-[#0a3a2a] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">
                Địa chỉ Email
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white border border-neutral-200 p-4 text-sm outline-none focus:border-[#0a3a2a] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-white border border-neutral-200 p-4 text-sm outline-none focus:border-[#0a3a2a] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-2">
                Xác nhận mật khẩu
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full bg-white border border-neutral-200 p-4 text-sm outline-none focus:border-[#0a3a2a] transition-colors"
              />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1"
                checked={agree}
                onChange={e => setAgree(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-neutral-600">
                Tôi đồng ý với <a href="#" className="text-[#cba052] hover:underline">Điều khoản Dịch vụ</a> và <a href="#" className="text-[#cba052] hover:underline">Chính sách Bảo mật</a>.
              </label>
            </div>

            <button type="submit" className="w-full bg-[#0a3a2a] text-white py-4 text-sm font-bold hover:bg-[#072a1e] transition-colors shadow-lg">
              Tạo Tài Khoản
            </button>
          </form>

          <div className="relative flex items-center justify-center my-8">
            <div className="absolute w-full h-px bg-neutral-200"></div>
            <span className="relative bg-[#fcfcfc] px-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Hoặc tiếp tục với
            </span>
          </div>

          <button className="w-full bg-white text-neutral-700 py-4 flex items-center justify-center gap-3 text-sm font-semibold hover:bg-neutral-50 transition-colors mb-8 border border-neutral-200 shadow-sm">
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Đăng ký bằng Google
          </button>

          <p className="text-center text-sm text-neutral-600 font-medium">
            Đã có tài khoản? <Link to="/login" className="font-bold text-[#0a3a2a] hover:underline">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
