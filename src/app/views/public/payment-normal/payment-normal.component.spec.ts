import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNormalComponent } from './payment-normal.component';

describe('PaymentNormalComponent', () => {
  let component: PaymentNormalComponent;
  let fixture: ComponentFixture<PaymentNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentNormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
