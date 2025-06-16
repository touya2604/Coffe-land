Dưới đây là nội dung **bổ sung cho file Markdown `world.md`** về **Angular Routing**, bao gồm:

---

## 🌍 Angular Routing – Tổng quan và Cách Sử dụng

### 🔹 1. Định nghĩa Routing

Angular sử dụng hệ thống định tuyến (Router) để điều hướng giữa các thành phần (components) thông qua URL mà không cần tải lại trang.

---

### 🔹 2. Khai báo tuyến (Route)

```ts
// app.routes.ts
import { Routes } from "@angular/router";
import { HomeComponent } from "./views/public/home/home.component";
import { LoginComponent } from "./views/public/login/login.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
];
```

---

### 🔹 3. Hai cách sử dụng điều hướng

#### 🔸 3.1. Sử dụng trong template (HTML)

```html
<a routerLink="/login">Đăng nhập</a>
```

#### 🔸 3.2. Sử dụng trong component (TypeScript)

```ts
constructor(private router: Router) {}

goToLogin() {
  this.router.navigate(['/login']);
}
```

---

### 🔹 4. Xử lý logic điều kiện khi điều hướng

#### ✅ Ví dụ: Nếu chưa đăng nhập thì mới cho phép vào trang login

```ts
isLoggedIn = false;

goToLogin() {
  if (!this.isLoggedIn) {
    this.router.navigate(['/login']);
  } else {
    alert('Bạn đã đăng nhập!');
  }
}
```

#### HTML gọi hàm:

```html
<button (click)="goToLogin()">Đăng nhập nếu chưa đăng nhập</button>
```

---

### 🔹 5. Tính năng liên quan

- **CanActivate Guard** → bảo vệ route khỏi truy cập trái phép
- **Route Params** → truyền dữ liệu qua URL
- **Lazy Loading** → tối ưu hiệu năng với module riêng biệt

---

Nếu bạn muốn mình đóng gói thành file `.md` sẵn hoặc mở rộng thêm `RouteGuard`, `Child Routes` hoặc `params`, mình có thể thêm vào ngay.
