import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { MedicalAppointmentComponent } from './pages/medical-appointment/medical-appointment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'medicalAppointment',
    component: MedicalAppointmentComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
