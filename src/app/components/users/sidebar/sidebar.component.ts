import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  check: string = 'thong-tin';
  router = inject(Router);
  // ngOnInit() {
  //   // Lắng nghe các sự kiện thay đổi định tuyến từ Angular Router
  //   this.router.events
  //     // Sử dụng toán tử filter để chỉ tiếp tục với các sự kiện là NavigationEnd
  //     // NavigationEnd là lúc route đã hoàn tất việc chuyển trang
  //     .pipe(
  //       filter(
  //         (event): event is NavigationEnd => event instanceof NavigationEnd
  //       )
  //     )
  //     // Đăng ký (subscribe) để xử lý mỗi lần có sự kiện NavigationEnd
  //     .subscribe((event: NavigationEnd) => {
  //       console.log('NavigationEnd:', event.urlAfterRedirects);
  //       // Lấy URL thực sự sau khi chuyển hướng (redirect), nếu có
  //       const url = event.urlAfterRedirects;

  //       // Dựa vào URL, xác định phần nào của giao diện đang được hiển thị
  //       // và gán giá trị cho biến `check` (biến này sẽ điều khiển CSS hoặc trạng thái nút đang active)

  //       if (url.includes('thong-tin-ca-nhan')) {
  //         this.check = 'thong-tin'; // Trang thông tin cá nhân
  //       } else if (url.includes('edit')) {
  //         this.check = 'edit'; // Trang chỉnh sửa thông tin
  //       } else if (url.includes('order-history')) {
  //         this.check = 'history'; // Trang lịch sử đơn hàng
  //       } else if (url.includes('nang-cao')) {
  //         this.check = 'nang-cao'; // Trang tính năng nâng cao
  //       }
  //     });
  // }

  //Dùng nếu chỉ cần gán ban đầu
  ngOnInit() {
    const url = this.router.url;
    if (url.includes('thong-tin-ca-nhan')) this.check = 'thong-tin';
    else if (url.includes('order-history')) this.check = 'history';
    else if (url.includes('edit')) this.check = 'edit';
    else if (url.includes('nang-cao')) this.check = 'nang-cao';
    else if (url.includes('voucher')) this.check = 'voucher';
  }
}
