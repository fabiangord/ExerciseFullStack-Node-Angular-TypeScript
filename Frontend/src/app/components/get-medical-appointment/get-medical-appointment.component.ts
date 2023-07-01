import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormDataMedicalAppointmentInterface } from 'src/app/types/types';

@Component({
  selector: 'app-get-medical-appointment',
  templateUrl: './get-medical-appointment.component.html',
  styleUrls: ['./get-medical-appointment.component.css']
})
export class GetMedicalAppointmentComponent implements OnInit{

  dataPatient!: FormDataMedicalAppointmentInterface[]

  constructor(private apiService: ApiServicesService){}

  ngOnInit(): void {
    this.getInfoPatients()
  }

  getInfoPatients(){
    this.apiService.getInfo('medicalAppointment')
      .subscribe(
        (data: any) => {
          if(Array.isArray(data)){
            this.dataPatient = data as FormDataMedicalAppointmentInterface[]
            console.log(`Info obtenida ${data}`);
          }else{
            console.log(`El formato del dato es incorrecto`);
          }
        },
        (error) => {
          console.log(`Info no obtenida ${error}`);
        }
      )
  }

}
