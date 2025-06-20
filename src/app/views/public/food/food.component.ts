import { Component } from '@angular/core';
import { Foods } from '../../../mock/food.mock';
import { CurrencyPipe, NgClass } from '@angular/common';
import { chunkArray } from '../../../core/utils/carousel-groups.util';
import { ProductDetailComponent } from '../../../shared/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { removeVietnameseTones } from '../../../core/function/removeVietnameseTones';

@Component({
  selector: 'app-food',
  imports: [CurrencyPipe, ProductDetailComponent, NgClass, FormsModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  food = Foods;
  check = false;
  selectedId!: string;
  grouped: any[][] = [];
  groupedPastries: any[][] = [];
  groupedLightMeals: any[][] = [];
  groupedSides: any[][] = [];

  priceSort: string = 'default';
  searchItem: string = '';
  //Sidebar
  checkValueSide: string = 'banh-ngot';
  ngOnInit() {
    const pastries = this.food.filter((f) => f.category === 'Bánh ngọt');
    const lightMeals = this.food.filter((f) => f.category === 'Bữa nhẹ');
    const sides = this.food.filter((f) => f.category === 'Ăn kèm');
    this.groupedPastries = chunkArray(pastries, 4);
    this.groupedLightMeals = chunkArray(lightMeals, 4);
    this.groupedSides = chunkArray(sides, 4);
    this.grouped = this.groupedPastries;
  }
  onHandleViewDetail(id: string) {
    this.check = true;
    this.selectedId = id;
  }
  onHandleClosePopup() {
    this.check = false;
  }
  onUpdate() {
    let filteredFood = [...this.food];
    if (this.priceSort === 'giam') {
      filteredFood.sort((a, b) => b.price - a.price);
    } else if (this.priceSort === 'tang') {
      filteredFood.sort((a, b) => a.price - b.price);
    }
    if (this.searchItem && this.searchItem !== '') {
      filteredFood = filteredFood.filter((food) =>
        removeVietnameseTones(food.name.toLowerCase()).includes(
          removeVietnameseTones(this.searchItem.toLowerCase())
        )
      );
    }
    const pastries = filteredFood.filter((f) => f.category === 'Bánh ngọt');
    const lightMeals = filteredFood.filter((f) => f.category === 'Bữa nhẹ');
    const sides = filteredFood.filter((f) => f.category === 'Ăn kèm');
    this.groupedPastries = chunkArray(pastries, 4);
    this.groupedLightMeals = chunkArray(lightMeals, 4);
    this.groupedSides = chunkArray(sides, 4);

    if (this.checkValueSide === 'banh-ngot') {
      this.grouped = this.groupedPastries;
    } else if (this.checkValueSide === 'bua-nhe') {
      this.grouped = this.groupedLightMeals;
    } else if (this.checkValueSide === 'other') {
      this.grouped = this.groupedSides;
    }
  }
  onReset() {
    this.priceSort = 'default';
    this.searchItem = '';
    this.onUpdate();
  }
}
