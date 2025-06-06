import { CurrencyPipe } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { Products } from '../../mock/product.mock';
import { chunkArray } from '../../core/utils/carousel-groups.util';
import { handleViewDetail } from '../../core/functions/handleView.function';
@Component({
  selector: 'app-best-seller',
  imports: [CurrencyPipe],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
})
export class BestSellerComponent {
  newCheck = output<void>();
  @Input() selectedId!: string;
  product = Products;
  groupedProducts: any[][] = [];
  ngOnInit() {
    const popularProduct = this.product.filter(
      (product) => product.isPopular === true
    );
    this.groupedProducts = chunkArray(popularProduct, 4);
  }
  onHandleViewDetail(id: string) {
    handleViewDetail(
      id,
      () => {
        this.newCheck.emit();
      },
      (value) => (this.selectedId = value)
    );
  }
}
