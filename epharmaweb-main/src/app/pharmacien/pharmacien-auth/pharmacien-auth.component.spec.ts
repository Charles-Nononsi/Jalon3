import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienAuthComponent } from './pharmacien-auth.component';

describe('PharmacienAuthComponent', () => {
  let component: PharmacienAuthComponent;
  let fixture: ComponentFixture<PharmacienAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacienAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacienAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
