# ☕️ CoffeLand

**CoffeLand** là một website bán hàng dành cho chuỗi cửa hàng cà phê và đồ ăn nhanh – được xây dựng bằng **Angular 19.2.12**. Dự án tập trung vào trải nghiệm người dùng mượt mà cho khách hàng (giao diện chính) và khả năng quản trị hiệu quả dành cho nhân viên/admin (giao diện quản lý).

---

## 🎯 Mục tiêu dự án

* Cung cấp giao diện chuyên nghiệp cho khách hàng truy cập thông tin sản phẩm, đặt hàng trực tuyến.
* Hỗ trợ phân loại sản phẩm: **đồ uống**, **đồ ăn**, **best seller** theo từng nhóm.
* Cung cấp giao diện quản trị nội bộ: thêm/xóa/sửa sản phẩm, theo dõi đơn hàng,...
* Thiết kế UI/UX theo chuẩn hiện đại, phù hợp với thói quen người dùng Việt.
* Cho phép đặt hàng **có hoặc không cần đăng nhập**, tùy theo mức độ xác thực.

---

## 🧱 Cấu trúc thư mục chính

```bash
app/
├── components/           # Các thành phần UI chính: header, footer, best-seller, drink, food
├── config/               # Các cấu hình dùng chung (ví dụ: pipe)
├── core/                 # Hàm logic xử lý core: handleView, carousel utils
├── mock/                 # Dữ liệu mẫu cho UI: drink, food, product
├── model/                # Định nghĩa các model dùng chung: Product
├── shared/               # Component tái sử dụng: button, product-detail
├── views/                # Phân chia giao diện theo loại người dùng:
│   ├── admin/            # Giao diện quản trị
│   ├── customer/         # Giao diện người dùng đã đăng nhập
│   └── public/           # Giao diện công khai: home, about, login, sign-up, cart
└── app.*                 # Tập tin chính khởi tạo và định tuyến
```

---

## 🚀 Khởi chạy môi trường phát triển

```bash
ng serve
```

Sau đó mở trình duyệt tại `http://localhost:4200/`. Ứng dụng sẽ tự động reload khi bạn sửa code.

---

## 🛠 Tạo component nhanh

```bash
ng generate component <tên-component>
```

Ví dụ:

```bash
ng generate component components/drink
```

---

## ⚙️ Build Production

```bash
ng build
```

Thư mục `dist/` sẽ chứa toàn bộ file đã được tối ưu để deploy.

> Có thể cấu hình để **build tách biệt** giữa giao diện Admin và Khách Hàng khi triển khai trên các subdomain riêng:
> `admin.coffeeland.vn` và `www.coffeeland.vn`.

---

## 🔐 Xác thực và Thanh toán

* Khách hàng **không đăng nhập vẫn có thể đặt hàng**, nhưng cần nhập Tên + SĐT.
* Người dùng **đăng nhập** sẽ có trải nghiệm tốt hơn:

  * Tự động điền thông tin cá nhân
  * Lưu đơn hàng
  * Nhận ưu đãi thành viên
* Sản phẩm trong giỏ hàng sẽ **không bị xóa tự động** nếu còn trong hệ thống.

---

## 🧪 Kiểm thử

Chạy unit test với Karma:

```bash
ng test
```

> Có thể thêm e2e framework như Cypress hoặc Playwright nếu cần.

---

## 💡 Các nguyên tắc thiết kế UI/UX

* **Phân nhóm sản phẩm rõ ràng** (Best Seller riêng theo từng loại)
* **Giao diện admin hoàn toàn tách biệt**, không sử dụng chung layout với frontend
* Thiết kế theo mô hình "tối ưu trải nghiệm đặt hàng nhanh nhất"
* Đảm bảo có thể truy cập nhanh sản phẩm từ trang chủ
* Thân thiện với thiết bị di động (mobile-first)

---

## 🌐 Deploy & Subdomain

* Hỗ trợ deploy tách biệt frontend và admin lên các **subdomain riêng**.
* Nếu deploy lên subdomain (`admin.coffeeland.vn`), cần:

  * Tối ưu bảo mật (ẩn index public)
  * Giới hạn truy cập nếu cần (auth hoặc IP whitelist)

---

## 📚 Tham khảo

* [Angular CLI Docs](https://angular.dev/tools/cli)
* [Angular Best Practices](https://angular.dev/guide/best-practices)
* [UX Guidelines for E-commerce](https://www.nngroup.com/topic/e-commerce/)

---

📌 *Đây là dự án thực hành xây dựng hệ thống bán hàng trực tuyến mang tính mô phỏng cao, có thể mở rộng cho chuỗi cửa hàng thực tế.*

