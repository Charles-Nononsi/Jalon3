import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienHomeComponent } from './pharmacien-home.component';

describe('PharmacienHomeComponent', () => {
  let component: PharmacienHomeComponent;
  let fixture: ComponentFixture<PharmacienHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacienHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacienHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
