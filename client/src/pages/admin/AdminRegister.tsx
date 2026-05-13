import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, CheckCircle2, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function AdminRegister() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  // Live validation: email domain
  const emailValid = email === '' || email.toLowerCase().endsWith('@laselva.com');
  const passwordStrength = password.length === 0 ? 0 : password.length < 8 ? 1 : password.length < 12 ? 2 : 3;
  const strengthLabel = ['', 'Yếu', 'Trung bình', 'Mạnh'];
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
      const res = await fetch('/api/auth/register-admin', {
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
      setTimeout(() => navigate('/admin/login'), 2500);
    } catch (err) {
      setError('Lỗi kết nối máy chủ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans bg-neutral-900">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1590490359854-df0a28f870fa?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Hotel Admin"
          className="w-full h-full object-cover filter blur-[4px] grayscale scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 p-10 md:p-14 w-[90%] max-w-[480px] rounded-[32px] shadow-2xl my-8"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6 text-[#cba052]">
          <div className="w-16 h-16 rounded-full bg-[#cba052]/10 flex items-center justify-center">
            <Shield size={32} />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold tracking-[0.2em] uppercase text-white mb-2">
            La Selva Premium
          </h1>
          <p className="text-xs tracking-widest uppercase text-[#cba052] font-medium">
            Đăng Ký Quản Trị Viên
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl overflow-hidden border border-neutral-700 mb-8">
          <Link
            to="/admin/login"
            className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors bg-transparent"
          >
            Đăng Nhập
          </Link>
          <div className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-widest text-neutral-900 bg-[#cba052]">
            Đăng Ký
          </div>
        </div>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                <CheckCircle2 size={36} />
              </div>
              <p className="text-white font-semibold text-lg">Đăng ký thành công!</p>
              <p className="text-neutral-400 text-sm text-center">
                Tài khoản quản trị viên đã được tạo.<br />
                Đang chuyển hướng đến trang đăng nhập…
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleRegister}
              className="space-y-5"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-400 text-center font-bold bg-red-400/10 py-3 rounded-lg border border-red-400/20"
                >
                  {error}
                </motion.p>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  Họ và Tên
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="admin-reg-name"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 pl-11 pr-4 py-4 text-sm outline-none focus:border-[#cba052] transition-colors rounded-lg"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  Địa chỉ Email
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="admin-reg-email"
                    type="email"
                    placeholder="ten@laselva.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`w-full bg-neutral-800 border text-white placeholder-neutral-500 pl-11 pr-4 py-4 text-sm outline-none transition-colors rounded-lg ${
                      !emailValid ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-[#cba052]'
                    }`}
                  />
                </div>
                {!emailValid && (
                  <p className="mt-1.5 text-[11px] text-red-400">
                    Email phải kết thúc bằng <span className="font-bold">@laselva.com</span>
                  </p>
                )}
                {emailValid && email !== '' && (
                  <p className="mt-1.5 text-[11px] text-green-400 flex items-center gap-1">
                    <CheckCircle2 size={11} /> Email hợp lệ
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="admin-reg-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 pl-11 pr-12 py-4 text-sm outline-none focus:border-[#cba052] transition-colors rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {/* Strength bar */}
                {password.length > 0 && (
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-1">
                      {[1, 2, 3].map(level => (
                        <div
                          key={level}
                          className="h-1 flex-1 rounded-full transition-colors duration-300"
                          style={{
                            backgroundColor: passwordStrength >= level ? strengthColor[passwordStrength] : '#404040'
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-[11px]" style={{ color: strengthColor[passwordStrength] }}>
                      Độ mạnh: {strengthLabel[passwordStrength]}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="admin-reg-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className={`w-full bg-neutral-800 border text-white placeholder-neutral-500 pl-11 pr-12 py-4 text-sm outline-none transition-colors rounded-lg ${
                      confirmPassword && confirmPassword !== password
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-700 focus:border-[#cba052]'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(v => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {confirmPassword && confirmPassword !== password && (
                  <p className="mt-1.5 text-[11px] text-red-400">Mật khẩu không khớp</p>
                )}
                {confirmPassword && confirmPassword === password && (
                  <p className="mt-1.5 text-[11px] text-green-400 flex items-center gap-1">
                    <CheckCircle2 size={11} /> Mật khẩu khớp
                  </p>
                )}
              </div>

              <button
                id="admin-reg-submit"
                type="submit"
                disabled={loading}
                className="w-full bg-[#cba052] text-neutral-900 py-4 flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#b58c43] disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-lg mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Đang xử lý…
                  </span>
                ) : (
                  <>
                    Tạo Tài Khoản Quản Trị
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <a href="/" className="text-xs text-neutral-500 hover:text-white transition-colors">
            ← Quay lại trang khách hàng
          </a>
        </div>
      </motion.div>
    </div>
  );
}
