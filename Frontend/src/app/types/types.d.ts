export interface FormDataDoctorsInterface {
    name: string
    lastname: string
    specialty: string
    office: number
    email: string
}

export interface FormDataPatientsInterface {
    name: string
    lastname: string
    documentNumber: string
    age: number
    phone: string
}

export type Especialidad = 'Medicina General' | 'Cardiología' | 'Medicina Interna' | 'Dermatología' | 'Rehabilitación Física' | 'Psicología' | 'Odontología' | 'Radiología'

export interface ApiResponse {
    doctores: FormDataDoctorsInterface[];
}

export interface ChangeEvent {
    target: HTMLSelectElement;
}