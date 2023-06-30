import { Component } from '@angular/core';
import { FormDataDoctorsInterface, FormDataMedicalAppointmentInterface } from 'src/app/types/types';
import { ApiServicesService } from 'src/app/services/api-services.service';
@Component({
  selector: 'app-form-medical-appointment',
  templateUrl: './form-medical-appointment.component.html',
  styleUrls: ['./form-medical-appointment.component.css']
})
export class FormMedicalAppointmentComponent{

  formDataMedicalAppointment: FormDataMedicalAppointmentInterface = {
    documentNumberPatient: '',
    specialty: '',
    doctorName: '',
    patientName: ''
  }
  doctors!: FormDataDoctorsInterface[] 

 

  constructor(private apiService: ApiServicesService){}

  saveInformationMedicalAppointment(){
    this.apiService.saveInfo(this.formDataMedicalAppointment, 'medicalAppointment')
      .subscribe(
        (data: any) => {
          location.reload()
          console.log(`Info enviada a la base de datos ${data}`)
        },
        (error)=>{
          console.error(`${error}`);
        }
      )
  }

  getSpecialty(){
    this.apiService.getDoctorsForSpecialty(this.formDataMedicalAppointment.specialty)
        .subscribe(
          (data: any) => { 
            const formData = data as FormDataDoctorsInterface[]
            this.doctors = formData
          },
          (error) => {
            console.log(error);
          }
        )
  }

}
