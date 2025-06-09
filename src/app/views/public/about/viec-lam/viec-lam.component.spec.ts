import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViecLamComponent } from './viec-lam.component';

describe('ViecLamComponent', () => {
  let component: ViecLamComponent;
  let fixture: ComponentFixture<ViecLamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViecLamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViecLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
