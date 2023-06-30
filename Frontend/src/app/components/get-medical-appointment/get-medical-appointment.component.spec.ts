import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMedicalAppointmentComponent } from './get-medical-appointment.component';

describe('GetMedicalAppointmentComponent', () => {
  let component: GetMedicalAppointmentComponent;
  let fixture: ComponentFixture<GetMedicalAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetMedicalAppointmentComponent]
    });
    fixture = TestBed.createComponent(GetMedicalAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
