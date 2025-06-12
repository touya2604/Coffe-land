import { Component } from '@angular/core';
import { Drinks } from '../../../mock/drink.mock';
import { chunkArray } from '../../../core/utils/carousel-groups.util';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-drink',
  imports: [CurrencyPipe],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.scss',
})
export class DrinkComponent {
  drink = Drinks;
  check = false;
  selectedId!: string;
  groupedCoffee: any[][] = [];
  groupedTea: any[][] = [];
  groupedOthers: any[][] = [];
  ngOnInit() {
    const coffee = this.drink.filter((d) => d.category === 'Coffee');
    const tea = this.drink.filter((d) => d.category === 'Tea');
    const others = this.drink.filter((d) => d.category === 'Others');
    this.groupedCoffee = chunkArray(coffee, 4);
    this.groupedTea = chunkArray(tea, 4);
    this.groupedOthers = chunkArray(others, 4);
  }
  onHandleViewDetail(id: string) {
    this.check = true;
    this.selectedId = id;
  }
}
