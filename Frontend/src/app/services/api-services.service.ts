import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormDataDoctorsInterface, FormDataPatientsInterface } from '../types/types';
import { Observable } from 'rxjs';
import { ApiResponse } from '../types/types';
 
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private api = 'http://localhost:5000/api/v1'

  constructor(private httpClient: HttpClient) { }

  saveInfo(formData: FormDataDoctorsInterface | FormDataPatientsInterface, pag: string){
    const url = `${this.api}/${pag}`
    return this.httpClient.post(url, formData)
  }

  getInfo(pag:string){
    const url = `${this.api}/${pag}`
    return this.httpClient.get(url)
  }

  getDoctoresPorEspecialidad(specialty: string): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.api}/specialty?specialty=${specialty}`);
  }
}
