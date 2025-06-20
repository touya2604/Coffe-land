import { Component } from '@angular/core';
import { Drinks } from '../../../mock/drink.mock';
import { chunkArray } from '../../../core/utils/carousel-groups.util';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ProductDetailComponent } from '../../../shared/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { removeVietnameseTones } from '../../../core/function/removeVietnameseTones';
@Component({
  selector: 'app-drink',
  imports: [CurrencyPipe, ProductDetailComponent, NgClass, FormsModule],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.scss',
})
export class DrinkComponent {
  drink = Drinks;
  check = false;
  selectedId!: string;
  grouped: any[][] = [];
  groupedCoffee: any[][] = [];
  groupedTea: any[][] = [];
  groupedOthers: any[][] = [];
  priceSort: string = 'default';
  searchItem: string = '';
  //sideBar
  checkValueSide: string = 'ca-phe';
  ngOnInit() {
    const coffee = this.drink.filter((d) => d.category === 'Coffee');
    const tea = this.drink.filter((d) => d.category === 'Tea');
    const others = this.drink.filter((d) => d.category === 'Others');
    this.groupedCoffee = chunkArray(coffee, 4);
    this.groupedTea = chunkArray(tea, 4);
    this.groupedOthers = chunkArray(others, 4);
    this.grouped = this.groupedCoffee;
  }
  onHandleViewDetail(id: string) {
    this.check = true;
    this.selectedId = id;
  }

  onHandleClosePopup() {
    this.check = false;
  }
  onUpdate() {
    let filteredDrinks = [...this.drink]; // luôn lấy từ dữ liệu gốc

    // Sắp xếp
    if (this.priceSort === 'giam') {
      filteredDrinks.sort((a, b) => b.price - a.price);
    } else if (this.priceSort === 'tang') {
      filteredDrinks.sort((a, b) => a.price - b.price);
    }

    // Lọc theo search
    if (this.searchItem && this.searchItem !== '') {
      filteredDrinks = filteredDrinks.filter((product) =>
        removeVietnameseTones(product.name.toLowerCase()).includes(
          removeVietnameseTones(this.searchItem.toLowerCase())
        )
      );
    }

    // Chia nhóm
    const coffee = filteredDrinks.filter((d) => d.category === 'Coffee');
    const tea = filteredDrinks.filter((d) => d.category === 'Tea');
    const others = filteredDrinks.filter((d) => d.category === 'Others');
    this.groupedCoffee = chunkArray(coffee, 4);
    this.groupedTea = chunkArray(tea, 4);
    this.groupedOthers = chunkArray(others, 4);

    if (this.checkValueSide === 'ca-phe') {
      this.grouped = this.groupedCoffee;
    } else if (this.checkValueSide === 'tra') {
      this.grouped = this.groupedTea;
    } else if (this.checkValueSide === 'other') {
      this.grouped = this.groupedOthers;
    }
  }
  onReset() {
    this.priceSort = 'default';
    this.searchItem = '';
    this.onUpdate();
  }
}
