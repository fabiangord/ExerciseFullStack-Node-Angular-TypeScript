import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentComponent } from './medical-appointment.component';

describe('MedicalAppointmentComponent', () => {
  let component: MedicalAppointmentComponent;
  let fixture: ComponentFixture<MedicalAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalAppointmentComponent]
    });
    fixture = TestBed.createComponent(MedicalAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
