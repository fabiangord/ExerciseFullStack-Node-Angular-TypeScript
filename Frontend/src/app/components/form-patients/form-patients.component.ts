import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormDataPatientsInterface } from 'src/app/types/types';

@Component({
  selector: 'app-form-patients',
  templateUrl: './form-patients.component.html',
  styleUrls: ['./form-patients.component.css']
})
export class FormPatientsComponent {

  formDataPatients: FormDataPatientsInterface = {
    name: '',
    lastname: '',
    documentNumber: '',
    age: 0,
    phone: ''
  }

  constructor(private apiServices:ApiServicesService){}

  saveInformationPatients(){
    this.apiServices.saveInfo(this.formDataPatients, 'patients')
      .subscribe(
        (data: Object) => {
          const formData = data as FormDataPatientsInterface
          location.reload()
          console.log(`Información enviada ${formData}`);
        },
        (error) => {
          console.log(`Información no enviada ${error}`);
        }
      )
  }

}
