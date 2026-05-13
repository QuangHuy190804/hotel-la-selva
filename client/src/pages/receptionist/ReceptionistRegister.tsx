import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Key, CheckCircle2 } from 'lucide-react';

export default function ReceptionistRegister() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const emailValid = email === '' || email.toLowerCase().endsWith('@laselva.com');
  const passwordStrength = password.length === 0 ? 0 : password.length < 8 ? 1 : password.length < 12 ? 2 : 3;
  const strengthColor = ['', '#ef4444', '#eab308', '#22c55e'];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.toLowerCase().endsWith('@laselva.com')) {
      setError('Địa chỉ email phải có đuôi @laselva.com');
      return;
    }
    if (password.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự');
      return;
    }
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register-receptionist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Đăng ký thất bại');
        return;
      }

      setSuccess(true);
      setTimeout(() => navigate('/receptionist/login'), 2500);
    } catch (err) {
      setError('Lỗi kết nối máy chủ');
    } finally {
      setLoading(false);
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

      {/* Register Card - Right side */}
      <div className="relative z-10 w-full md:w-1/2 ml-auto flex flex-col justify-center px-10 sm:px-20 lg:px-32 xl:px-40 bg-[#1a1816]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-10 md:py-0 overflow-y-auto">
        
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
            <Link
              to="/receptionist/login"
              className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-300 transition-colors pb-2"
            >
              Đăng Nhập
            </Link>
            <div className="text-xs font-medium tracking-[0.15em] uppercase text-[#cba052] border-b-2 border-[#cba052] pb-2 -mb-[3px]">
              Đăng Ký
            </div>
          </div>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <CheckCircle2 size={48} className="text-[#cba052] mb-4" />
                <p className="text-white tracking-widest uppercase font-light">Đăng ký thành công</p>
                <p className="text-neutral-400 text-sm font-light">
                  Đang chuyển hướng đến trang đăng nhập…
                </p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleRegister} 
                className="space-y-8"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
                
                <div className="relative group">
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="peer w-full bg-transparent border-b border-neutral-700 text-white placeholder-transparent py-2 text-sm outline-none focus:border-[#cba052] transition-colors"
                    placeholder="FULL NAME"
                  />
                  <label className="absolute left-0 -top-4 text-[10px] font-medium tracking-widest text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#cba052] uppercase">
                    Họ và Tên
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`peer w-full bg-transparent border-b text-white placeholder-transparent py-2 text-sm outline-none transition-colors ${!emailValid ? 'border-red-500' : 'border-neutral-700 focus:border-[#cba052]'}`}
                    placeholder="EMAIL ADDRESS"
                  />
                  <label className="absolute left-0 -top-4 text-[10px] font-medium tracking-widest text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#cba052] uppercase">
                    Địa chỉ Email
                  </label>
                  {!emailValid && (
                    <p className="absolute -bottom-5 left-0 text-[10px] text-red-400">
                      Bắt buộc đuôi @laselva.com
                    </p>
                  )}
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
                  {password.length > 0 && (
                    <div className="absolute -bottom-1 left-0 flex gap-1 w-24">
                      {[1, 2, 3].map(level => (
                        <div
                          key={level}
                          className="h-[2px] flex-1 transition-colors duration-300"
                          style={{
                            backgroundColor: passwordStrength >= level ? strengthColor[passwordStrength] : 'transparent'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative group pt-2">
                  <input 
                    type="password" 
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className={`peer w-full bg-transparent border-b text-white placeholder-transparent py-2 text-sm outline-none transition-colors ${confirmPassword && confirmPassword !== password ? 'border-red-500' : 'border-neutral-700 focus:border-[#cba052]'}`}
                    placeholder="CONFIRM PASSWORD"
                  />
                  <label className="absolute left-0 -top-2 text-[10px] font-medium tracking-widest text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#cba052] uppercase">
                    Xác nhận mật khẩu
                  </label>
                  {confirmPassword && confirmPassword !== password && (
                    <p className="absolute -bottom-5 left-0 text-[10px] text-red-400">
                      Mật khẩu không khớp
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#cba052] text-[#1a1816] py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.1em] hover:bg-[#e2bd75] transition-colors mt-8 disabled:opacity-50"
                >
                  {loading ? 'ĐANG XỬ LÝ...' : 'TẠO TÀI KHOẢN'}
                  <ArrowRight size={16} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <a href="/" className="text-[10px] font-medium tracking-widest text-[#cba052] hover:text-[#e2bd75] transition-colors uppercase">
              ← Quay lại trang chủ
            </a>
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
