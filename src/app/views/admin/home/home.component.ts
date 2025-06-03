import { Component } from '@angular/core';
import { Products } from '../../../mock/product.mock';
import { NgFor, SlicePipe } from '@angular/common';
import { ChunkPipe } from '../../../config/pipe.config';
import { Foods } from '../../../mock/food.mock';
import { Drinks } from '../../../mock/drink.mock';

@Component({
  selector: 'app-home',
  imports: [SlicePipe, NgFor, ChunkPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = Products;
  foods = Foods;
  drinks = Drinks;
}
