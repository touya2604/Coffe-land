import { Component } from '@angular/core';
import { Foods } from '../../../mock/food.mock';
import { CurrencyPipe, NgClass } from '@angular/common';
import { chunkArray } from '../../../core/utils/carousel-groups.util';
import { ProductDetailComponent } from '../../../shared/product-detail/product-detail.component';

@Component({
  selector: 'app-food',
  imports: [CurrencyPipe, ProductDetailComponent, NgClass],
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
    if (this.checkValueSide === 'banh-ngot') {
      this.grouped = this.groupedPastries;
    } else if (this.checkValueSide === 'bua-nhe') {
      this.grouped = this.groupedLightMeals;
    } else if (this.checkValueSide === 'other') {
      this.grouped = this.groupedSides;
    }
  }
}
