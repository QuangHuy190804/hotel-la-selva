# Tài Liệu Bàn Giao Dự Án: La Selva Premium Hotel

## 1. Bối Cảnh Dự Án
Dự án **La Selva Premium Hotel** là một hệ thống website quản lý khách sạn Full-Stack (hiện tại tập trung vào Frontend) dành cho một khách sạn phân khúc cao cấp nằm tại khu vực Phố Cổ Hà Nội. 
- **Mục tiêu**: Xây dựng giao diện mượt mà, sang trọng mang tính thẩm mỹ cao (Vibrant aesthetics, Premium UI) để nâng tầm thương hiệu, thay thế cho giao diện cũ.
- **Phong cách thiết kế**: Sử dụng tông màu chủ đạo Xanh Lục Bảo (Emerald Green `#0a3a2a`) và Vàng Ánh Kim (Gold `#cba052`). Typography hiện đại, các yếu tố được trình bày theo dạng Full-width để tạo cảm giác chìm đắm (immersive).
- **Công nghệ cốt lõi**: React (Vite), TypeScript, Tailwind CSS, Lucide React (Icons), Framer Motion (Animations).

## 2. Các Hạng Mục Đã Hoàn Thành (100% Việt Hóa)
Toàn bộ dự án đã được dịch sang tiếng Việt và điều chỉnh phù hợp với văn hóa nội địa (Sử dụng tiền tệ VNĐ):

- **Trang Chủ (`Landing.tsx`)**: Đã thiết kế lại Hero Banner, tích hợp Booking Widget (Hoạt động tốt: cho phép chọn Ngày đến, Ngày đi, số lượng khách, sau đó chuyển hướng và tự động lọc ở trang Phòng).
- **Trang Danh Sách Phòng (`Rooms.tsx`)**: Đã tích hợp logic nhận query parameters (số lượng khách) từ trang chủ để tự động lọc phòng có sức chứa phù hợp.
- **Trang Chi Tiết Phòng (`RoomDetail.tsx`)**: Hoàn thiện UI xem chi tiết, tiện ích, tự động tính tổng tiền (gồm 12% thuế) theo VNĐ.
- **Trang Ẩm Thực (`Dining.tsx`)**: Giao diện đẹp mắt giới thiệu Nhà Hàng và Sảnh Chờ.
- **Trang Spa (`Spa.tsx`)**: Layout 2 cột với thông tin liên hệ và một Form Popup Modal (chọn giới tính, ngày giờ, số khách) hiện lên khi bấm "Đặt Ngay".
- **Giao Diện Quản Trị (`Dashboard.tsx` & `Sidebar.tsx`)**: Dashboard Admin hiện đại hiển thị Tổng doanh thu, Tỉ lệ lấp đầy, bảng các giao dịch gần đây của khách hàng.
- **Dữ liệu hệ thống (`constants.ts`)**: Sử dụng 6 hạng phòng mock với giá trị chuẩn VNĐ (Deluxe, Executive, Suite, Family). Cấu hình tiền tệ trong `utils.ts` đã chuẩn định dạng `vi-VN`.

## 3. Các Phần Còn Đang Giả Lập (Mock) & Dang Dở
Mặc dù UI Frontend đã rất hoàn thiện, phần Logic và Backend vẫn cần được xây dựng:

1. **Dữ liệu tĩnh (Mock Data)**: Các phòng và lịch đặt phòng đang lấy từ biến `MOCK_ROOMS` và `MOCK_RESERVATIONS` trong file `client/src/constants.ts`. Cần thay thế bằng các lệnh gọi API thực tế.
2. **Form Đặt Lịch Spa (`Spa.tsx`)**: Modal đặt lịch đã thiết kế xong nhưng nút "Hoàn Tất Đặt Lịch" chưa có logic gửi dữ liệu đi (chưa gọi API gửi email hoặc lưu DB).
3. **Các trang Admin (`App.tsx`)**: Trong Router, các đường dẫn `/admin/rooms` và `/admin/bookings` đang trỏ tạm (Placeholder) về component `AdminDashboard`. Chưa có giao diện riêng biệt cho việc Quản lý kho phòng hay Danh sách Đặt phòng.
4. **Logic Đặt Phòng (`RoomDetail.tsx`)**: Nút "Đặt Phòng Ngay" chỉ mới hiển thị giao diện, chưa có luồng tạo Reservation thật sự vào hệ thống.

## 4. Nhiệm Vụ Cụ Thể Cần Làm Tiếp Theo
Để biến dự án này thành một ứng dụng Full-Stack hoàn chỉnh, dưới đây là các bước ưu tiên:

1. **Xây dựng Backend APIs (Node.js/Express)**:
   - Thiết lập MongoDB Models cho `Room`, `User`, và `Reservation`. (Các file như `server/models/Room.ts` và `server/db.ts` đã có sẵn cơ sở nhưng cần định nghĩa chi tiết).
   - Viết các Controller để lấy danh sách phòng (`GET /api/rooms`), xem chi tiết phòng, và tính khả dụng của phòng theo ngày.
2. **Tích hợp API vào Frontend**:
   - Sử dụng React Query hoặc `useEffect/fetch` thay thế file `constants.ts`.
   - Kết nối Booking Widget và Form Spa với các API tương ứng (tạo Endpoint `POST /api/bookings`).
3. **Hoàn thiện luồng Thanh Toán / Đặt Phòng**:
   - Xây dựng màn hình Checkout (Nhập thông tin cá nhân khách hàng sau khi ấn "Đặt Phòng Ngay").
4. **Thiết kế nốt các trang Admin**:
   - Viết component `AdminRooms.tsx` (Quản lý CRUD phòng nghỉ).
   - Viết component `AdminBookings.tsx` (Duyệt/Hủy lịch đặt phòng).
