import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedicalAppointmentComponent } from './form-medical-appointment.component';

describe('FormMedicalAppointmentComponent', () => {
  let component: FormMedicalAppointmentComponent;
  let fixture: ComponentFixture<FormMedicalAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMedicalAppointmentComponent]
    });
    fixture = TestBed.createComponent(FormMedicalAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
