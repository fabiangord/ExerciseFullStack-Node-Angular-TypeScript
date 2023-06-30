import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormDataDoctorsInterface, FormDataMedicalAppointmentInterface, FormDataPatientsInterface } from '../types/types';
import { Observable } from 'rxjs';
import { ApiResponse } from '../types/types';
 
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private api = 'http://localhost:5000/api/v1'

  constructor(private httpClient: HttpClient) { }

  saveInfo(formData: FormDataDoctorsInterface | FormDataPatientsInterface | FormDataMedicalAppointmentInterface, pag: string){
    const url = `${this.api}/${pag}`
    return this.httpClient.post(url, formData)
  }

  getInfo(pag:string){
    const url = `${this.api}/${pag}`
    return this.httpClient.get(url)
  }

  getDoctorsForSpecialty(specialty: string): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.api}/specialty?specialty=${specialty}`);
  }
}
