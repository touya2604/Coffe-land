import { Component } from '@angular/core';
import { Products } from '../../../mock/product.mock';
import { NgFor } from '@angular/common';
import { ChunkPipe } from '../../../config/pipe.config';
import { Foods } from '../../../mock/food.mock';
import { Drinks } from '../../../mock/drink.mock';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from '../../../shared/product-detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  imports: [
    NgFor,
    ChunkPipe,
    FormsModule,
    ProductDetailComponent,
    CartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = Products;
  foods = Foods;
  drinks = Drinks;
  check = false;
  selectedId!: string;
  onHandleViewDetail(id: string) {
    this.check = true;
    this.selectedId = id;
  }
  onHandleClosePopup() {
    this.check = false;
  }
}
