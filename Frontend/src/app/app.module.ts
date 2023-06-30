import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { MedicalAppointmentComponent } from './pages/medical-appointment/medical-appointment.component';
import { FormDoctorsComponent } from './components/form-doctors/form-doctors.component';
import { FormPatientsComponent } from './components/form-patients/form-patients.component';
import { GetDoctorsComponent } from './components/get-doctors/get-doctors.component';
import { GetPatientsComponent } from './components/get-patients/get-patients.component';
import { GetMedicalAppointmentComponent } from './components/get-medical-appointment/get-medical-appointment.component';
import { FormMedicalAppointmentComponent } from './components/form-medical-appointment/form-medical-appointment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ApiServicesService } from './services/api-services.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    PatientsComponent,
    MedicalAppointmentComponent,
    FormDoctorsComponent,
    FormPatientsComponent,
    GetDoctorsComponent,
    GetPatientsComponent,
    GetMedicalAppointmentComponent,
    FormMedicalAppointmentComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
