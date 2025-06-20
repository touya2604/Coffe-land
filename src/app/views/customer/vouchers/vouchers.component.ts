import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/users/sidebar/sidebar.component';
import { Vouchers } from '../../../mock/voucher.mock';
import { parseDate } from '../../../core/function/convertDate';

@Component({
  selector: 'app-vouchers',
  imports: [SidebarComponent],
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.scss',
})
export class VouchersComponent {
  vouchers = Vouchers;
  getNgayConLai(id: string) {
    const voucherCanTim = this.vouchers.find((p) => p.id === id);
    const expDate = parseDate(voucherCanTim!.expiry);
    const today = new Date();
    const timeDiff = expDate.getTime() - today.getTime();
    const dayLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dayLeft;
  }
}
