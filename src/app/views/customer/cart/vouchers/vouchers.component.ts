import { Component, output } from '@angular/core';
import { Vouchers } from '../../../../mock/voucher.mock';
import { parseDate } from '../../../../core/function/convertDate';
import { NgClass } from '@angular/common';
import { Voucher } from '../../../../model/voucher.model';

@Component({
  selector: 'app-vouchers',
  imports: [NgClass],
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.scss',
})
export class VouchersComponent {
  newCheck = output<void>();
  notFormatVouchers = Vouchers;
  getNgayConLai(id: string) {
    const voucherCanTim = this.notFormatVouchers.find((p) => p.id === id);
    const expDate = parseDate(voucherCanTim!.expiry);
    const today = new Date();
    const timeDiff = expDate.getTime() - today.getTime();
    const dayLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dayLeft;
  }
  vouchers: Voucher[] = this.notFormatVouchers.filter(
    (v) => this.getNgayConLai(v.id) > 0
  );
  onClosePopup() {
    this.newCheck.emit();
  }
}
