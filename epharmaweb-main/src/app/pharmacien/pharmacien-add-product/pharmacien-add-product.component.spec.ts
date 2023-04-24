import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienAddProductComponent } from './pharmacien-add-product.component';

describe('PharmacienAddProductComponent', () => {
  let component: PharmacienAddProductComponent;
  let fixture: ComponentFixture<PharmacienAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacienAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacienAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
