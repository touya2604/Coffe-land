import { Component } from '@angular/core';
import { Products } from '../../../mock/product.mock';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = Products;
}
