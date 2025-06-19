import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCusComponent } from './cart-cus.component';

describe('CartCusComponent', () => {
  let component: CartCusComponent;
  let fixture: ComponentFixture<CartCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
