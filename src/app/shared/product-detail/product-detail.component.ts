import { Component, input, effect, output } from '@angular/core';
import { Product } from '../../model/product.model';
import { Foods } from '../../mock/food.mock';
import { Drinks } from '../../mock/drink.mock';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  // product = input.required<Product | undefined>();
  productId = input.required<string>();
  newCheck = output<void>();
  foods = Foods;
  drinks = Drinks;
  get selectedProduct() {
    return (
      this.foods.find((food) => food.id === this.productId()) ||
      this.drinks.find((drink) => drink.id === this.productId())
    );
  }

  get imagePath() {
    return this.selectedProduct?.img;
  }
  closePopup() {
    this.newCheck.emit();
  }
  onAddToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex(
      (item: any) => item.id === this.selectedProduct!.id
    );
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...this.selectedProduct, quantity: 1 });
    }
    alert('Thêm vô giỏ hàng thành công');
    localStorage.setItem('cart', JSON.stringify(cart));
    this.newCheck.emit();
  }
}
