So sánh (input) và (change) trong Angular

1. (input)
   - Kích hoạt: Mỗi khi giá trị trong <input> thay đổi (ngay khi gõ phím, dán, xóa, v.v.).
   - Trải nghiệm: Cho phép lọc/search realtime (tức thì).
   - Sử dụng:
     <input (input)="onUpdate()" ... />
   - Thích hợp: Khi bạn muốn xử lý ngay lập tức mỗi lần người dùng thay đổi nội dung.
2. (change)
   - Kích hoạt: Chỉ khi input mất focus (blur) và giá trị đã thay đổi.
   - Trải nghiệm: Người dùng phải gõ xong rồi click ra ngoài hoặc nhấn Enter thì mới lọc/search.
   - Sử dụng:
     <input (change)="onUpdate()" ... />
   - Thích hợp: Khi bạn chỉ muốn xử lý sau khi người dùng nhập xong.
3. Kết luận:
   - Dùng (input) để lọc/search realtime (trải nghiệm tốt hơn).
   - Dùng (change) nếu chỉ muốn xử lý khi người dùng nhập xong và rời khỏi ô input.
