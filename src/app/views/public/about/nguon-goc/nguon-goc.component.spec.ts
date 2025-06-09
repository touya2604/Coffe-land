import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguonGocComponent } from './nguon-goc.component';

describe('NguonGocComponent', () => {
  let component: NguonGocComponent;
  let fixture: ComponentFixture<NguonGocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NguonGocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NguonGocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
