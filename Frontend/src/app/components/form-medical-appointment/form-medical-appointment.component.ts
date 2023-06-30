import { Component, OnInit } from '@angular/core';
import { ApiResponse, Especialidad, FormDataDoctorsInterface } from 'src/app/types/types';
import { HttpClient } from '@angular/common/http';
import { ApiServicesService } from 'src/app/services/api-services.service';
@Component({
  selector: 'app-form-medical-appointment',
  templateUrl: './form-medical-appointment.component.html',
  styleUrls: ['./form-medical-appointment.component.css']
})
export class FormMedicalAppointmentComponent{

  doctor!: FormDataDoctorsInterface[]
  specialty!:string
  specialtys: string[] = [
    'Medicina General' , 'Cardiología' , 'Medicina Interna' , 'Dermatología' , 'Rehabilitación Física' , 'Psicología' , 'Odontología' , 'Radiología'
  ]

  constructor(private apiService: ApiServicesService){}

  obtenerEspe(){
    this.apiService.getDoctoresPorEspecialidad(this.specialty)
        .subscribe(
          (data: any) => { 
            const formData = data as FormDataDoctorsInterface[]
            this.doctor = formData
          },
          (error) => {
            console.log(error);
          }
        )
  }

}
