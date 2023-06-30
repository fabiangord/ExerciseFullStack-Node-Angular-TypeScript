import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormDataPatientsInterface } from 'src/app/types/types';

@Component({
  selector: 'app-get-patients',
  templateUrl: './get-patients.component.html',
  styleUrls: ['./get-patients.component.css']
})
export class GetPatientsComponent implements OnInit{

  dataPatient!: FormDataPatientsInterface[]

  constructor(private apiServices: ApiServicesService){}

  ngOnInit(): void {
    this.getInformationPatients()
  }

  getInformationPatients(){
    this.apiServices.getInfo('patients')
      .subscribe(
        (data:any)=>{
          if(Array.isArray(data)){
            this.dataPatient = data as FormDataPatientsInterface[]
          }else{
            console.error(`La respuesta al API no es un arreglo valido`);
          }
        }
      )
  }
  

}
