import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  methodBtn = input('get');
  typeBtn = input('Button');
  context = input.required<string>();
}
