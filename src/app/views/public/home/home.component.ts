import { Component, inject } from '@angular/core';
import { Products } from '../../../mock/product.mock';
import { CurrencyPipe, NgFor } from '@angular/common';
import { Foods } from '../../../mock/food.mock';
import { Drinks } from '../../../mock/drink.mock';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from '../../../shared/product-detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';
import { chunkArray } from '../../../core/utils/carousel-groups.util';
import { Product } from '../../../model/product.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    ProductDetailComponent,
    CartComponent,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router = inject(Router);
  categoriesFood = [
    {
      name: 'Bánh ngọt',
      slug: 'banh-ngot',
    },
    {
      name: 'Bữa nhẹ',
      slug: 'bua-nhe',
    },
    {
      name: 'Món ăn khác',
      slug: 'other',
    },
  ];

  categoriesDrink = [
    {
      name: 'Cà phê',
      slug: 'ca-phe',
    },
    {
      name: 'Trà',
      slug: 'tra',
    },
    {
      name: 'Đồ uống khác',
      slug: 'other',
    },
  ];

  foods = Foods;
  drinks = Drinks;
  check = false;
  selectedId!: string;
  //Limit product of each Data to 11
  newFoods: Product[] = [];
  newDrinks: Product[] = [];
  popularFood: Product[] = [];
  popularDrink: Product[] = [];
  onHandleViewDetail(id: string) {
    this.check = true;
    this.selectedId = id;
  }
  onHandleClosePopup() {
    this.check = false;
  }

  groupedPopularFood: any[][] = [];
  groupedPopularDrink: any[][] = [];
  groupedFood: any[][] = [];
  groupedDrink: any[][] = [];
  ngOnInit() {
    const popFood = this.foods.filter((product) => product.isPopular === true);
    const popDrink = this.drinks.filter(
      (product) => product.isPopular === true
    );

    for (let i = 0; i < 11; i++) {
      if (i < this.foods.length && i < this.drinks.length) {
        this.newFoods.push(this.foods[i]);
        this.newDrinks.push(this.drinks[i]);
      } else {
        continue;
      }
    }
    for (let i = 0; i < 8; i++) {
      if (i < this.foods.length && i < this.drinks.length) {
        this.popularFood.push(popFood[i]);
        this.popularDrink.push(popDrink[i]);
      } else {
        continue;
      }
    }
    // this.groupedPopularFood = chunkArray(this.popularFood, 4);
    // this.groupedPopularFood = chunkArray(this.popularFood, 4);
    // this.groupedFood = chunkArray(this.newFoods, 4);
    // this.groupedDrink = chunkArray(this.newDrinks, 4);
  }
  sendDataFood(cate: string) {
    this.router.navigate(['/foods'], { queryParams: { category: cate } });
  }
  sendDataDrink(cate: string) {
    this.router.navigate(['/drinks'], { queryParams: { category: cate } });
  }
}
