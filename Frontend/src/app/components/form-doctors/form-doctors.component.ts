import { Component} from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormDataDoctorsInterface } from 'src/app/types/types';

@Component({
  selector: 'app-form-doctors',
  templateUrl: './form-doctors.component.html',
  styleUrls: ['./form-doctors.component.css']
})
export class FormDoctorsComponent{

  public formData:FormDataDoctorsInterface = {
    name: '',
    lastname: '',
    specialty: '',
    office: 0,
    email: ''
  }

  constructor(private apiService: ApiServicesService){}

  

  saveInformationDoctors(){
    this.apiService.saveInfo(this.formData, 'doctors')
      .subscribe(
        (response) => {
          location.reload()
          console.log(`Informacion guardada con exito ${response}`);
        },
        (error) => {
          console.log(`Informacion no guardada ${error}`);
        }
      )
  }
}
