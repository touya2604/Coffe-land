Tuyệt vời! Sau đây là hướng dẫn chi tiết, dễ hiểu và thực tế về **cách sử dụng Regex (biểu thức chính quy)** để kiểm tra **input chứa số, chữ, hoặc cả hai** – dành riêng cho bạn làm **Frontend với Angular hoặc JavaScript/TypeScript nói chung**.

---

## 🔍 1. **Regex là gì?**

Regex (Regular Expression) là chuỗi ký tự đặc biệt giúp bạn tìm kiếm hoặc kiểm tra mẫu dữ liệu trong chuỗi văn bản.

Ví dụ:

- `\d` → số
- `\w` → chữ + số + dấu gạch dưới
- `^` → bắt đầu chuỗi
- `$` → kết thúc chuỗi

---

## 🧪 2. **Cách dùng Regex trong JavaScript/TypeScript**

Cú pháp cơ bản:

```ts
/biểu_thức/.test(chuỗi_cần_kiểm_tra);
```

Ví dụ:

```ts
/\d/.test("abc123"); // true vì có số
```

---

## ✅ 3. **Các Regex phổ biến (ví dụ dễ hiểu)**

| Mục tiêu                      | Regex                                    | Giải thích dễ hiểu                      |                                |
| ----------------------------- | ---------------------------------------- | --------------------------------------- | ------------------------------ |
| Có chứa số                    | `/\d/`                                   | Số từ 0–9, xuất hiện đâu đó trong chuỗi |                                |
| Có chứa chữ                   | `/[a-zA-Z]/`                             | Chữ thường và chữ hoa (Tiếng Anh)       |                                |
| Chỉ chứa số                   | `/^\d+$/`                                | Bắt đầu đến kết thúc đều là số          |                                |
| Chỉ chứa chữ                  | `/^[a-zA-Z]+$/`                          | Bắt đầu đến kết thúc đều là chữ         |                                |
| Chứa cả chữ và số             | `/[a-zA-Z]/.test(str) && /\d/.test(str)` | Kết hợp 2 điều kiện                     |                                |
| Email hợp lệ                  | `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/`     | Cách kiểm tra định dạng email đơn giản  |                                |
| SĐT Việt Nam (bắt đầu bằng 0) | \`/^(0                                   | +84)\d{9}\$/\`                          | 10 số, bắt đầu bằng 0 hoặc +84 |

---

## 🧠 4. **Ví dụ kiểm tra input**

```ts
checkInput(value: string) {
  if (/^\d+$/.test(value)) {
    console.log('👉 Chỉ chứa số');
  } else if (/^[a-zA-Z]+$/.test(value)) {
    console.log('👉 Chỉ chứa chữ');
  } else if (/\d/.test(value) && /[a-zA-Z]/.test(value)) {
    console.log('👉 Chứa cả chữ và số');
  } else {
    console.log('👉 Chứa ký tự đặc biệt hoặc trống');
  }
}
```

---

## 🔧 5. **Ứng dụng trong Angular Template**

```html
<input [(ngModel)]="userInput" />
<p *ngIf="/\d/.test(userInput)">✅ Có chứa số</p>
<p *ngIf="/^[a-zA-Z]+$/.test(userInput)">✅ Chỉ có chữ</p>
```

> **Lưu ý**: HTML không hiểu được Regex trực tiếp, bạn cần bind qua TS hoặc dùng hàm trong component.

---

## 🔁 6. **Tạo hàm check trong Component**

```ts
checkContainsNumber(value: string): boolean {
  return /\d/.test(value);
}

checkOnlyLetters(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
```

---

## 📚 7. **Nguồn học Regex dễ hiểu**

- [https://regex101.com/](https://regex101.com/) ← Trang kiểm tra Regex trực tiếp
- Cấu trúc tự học:
  👉 Học `\d`, `\w`, `^`, `$`, `[a-z]`, `+`, `*`, `?`
  👉 Viết thử với các chuỗi mẫu
  👉 Gắn vào dự án thật như validate form

---

Bạn muốn mình:

- Tạo hẳn component Angular dùng Regex để validate real-time không?
- Viết Regex cho định dạng cụ thể (ví dụ: CCCD, mã số thuế, mật khẩu mạnh)?

Cứ nói mình biết!
