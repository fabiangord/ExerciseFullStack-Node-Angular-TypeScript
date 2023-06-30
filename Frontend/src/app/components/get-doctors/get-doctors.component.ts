import { Component, OnInit } from '@angular/core';
import { FormDataDoctorsInterface } from 'src/app/types/types';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-get-doctors',
  templateUrl: './get-doctors.component.html',
  styleUrls: ['./get-doctors.component.css']
})
export class GetDoctorsComponent implements OnInit{

  dataDoctor!: FormDataDoctorsInterface[] 

  constructor(private apiService: ApiServicesService){}

  ngOnInit(): void {
    this.getInformationDoctor()
  }

  getInformationDoctor(){
    this.apiService.getInfo('doctors')
      .subscribe(
        (data: any)=>{
          if (Array.isArray(data)) {
            this.dataDoctor = data as FormDataDoctorsInterface[];
          } else {
            console.error('La respuesta de la API no es un arreglo válido');
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
