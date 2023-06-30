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

export interface FormDataMedicalAppointmentInterface {
    documentNumberPatient: string
    specialty: string
    doctorName: string
    patientName: string
}

export type SpecialtyType = 'Medicina General' | 'Cardiología' | 'Medicina Interna' | 'Dermatología' | 'Rehabilitación Física' | 'Psicología' | 'Odontología' | 'Radiología' 

export interface ApiResponse {
    doctores: FormDataDoctorsInterface[];
}
