import express from 'express';
import crypto from 'crypto';
import { User } from '../models/User.js';

const router = express.Router();

const hashPassword = (password: string) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }

    const user = new User({
      name,
      email,
      password: hashPassword(password),
      role: 'guest'
    });

    await user.save();
    
    // For demo purposes, we return user data without token
    const userData = user.toJSON();
    delete (userData as any).password;
    
    res.status(201).json({ user: userData });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Đã xảy ra lỗi' });
  }
});

router.post('/register-admin', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Enforce @laselva.com domain
    if (!email || !email.toLowerCase().endsWith('@laselva.com')) {
      return res.status(400).json({ error: 'Địa chỉ email phải có đuôi @laselva.com' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }

    if (!password || password.length < 8) {
      return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 8 ký tự' });
    }

    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashPassword(password),
      role: 'admin'
    });

    await user.save();

    const userData = user.toJSON();
    delete (userData as any).password;

    res.status(201).json({ user: userData });
  } catch (error) {
    console.error('Register admin error:', error);
    res.status(500).json({ error: 'Đã xảy ra lỗi' });
  }
});

router.post('/register-receptionist', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Enforce @laselva.com domain
    if (!email || !email.toLowerCase().endsWith('@laselva.com')) {
      return res.status(400).json({ error: 'Địa chỉ email phải có đuôi @laselva.com' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }

    if (!password || password.length < 8) {
      return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 8 ký tự' });
    }

    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashPassword(password),
      role: 'receptionist'
    });

    await user.save();

    const userData = user.toJSON();
    delete (userData as any).password;

    res.status(201).json({ user: userData });
  } catch (error) {
    console.error('Register receptionist error:', error);
    res.status(500).json({ error: 'Đã xảy ra lỗi' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng' });
    }

    if (user.password !== hashPassword(password)) {
      return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng' });
    }

    if (role && user.role !== role) {
      let message = 'Tài khoản không có quyền truy cập';
      if (role === 'admin') {
        message = 'Đây không phải tài khoản quản trị viên. Vui lòng kiểm tra lại.';
      } else if (role === 'receptionist') {
        message = 'Đây không phải tài khoản lễ tân. Vui lòng kiểm tra lại.';
      } else if (role === 'guest') {
        message = 'Đây là tài khoản nội bộ. Vui lòng sử dụng cổng đăng nhập tương ứng.';
      }
      return res.status(403).json({ error: message });
    }

    const userData = user.toJSON();
    delete (userData as any).password;

    res.json({ user: userData });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Đã xảy ra lỗi' });
  }
});

export default router;
