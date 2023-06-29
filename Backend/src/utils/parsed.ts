import { NewDoctorType, NewMedicalAppointmentType, NewPatientType } from "../types/types";
import { SpecialtyType } from "./enums";

const isString = (string:any): boolean => {
    return typeof string === 'string'
} 

const isSpecialty = (specialtyFromRequest:any): boolean =>{
    return Object.values(SpecialtyType).includes(specialtyFromRequest)
}

const isEmail = (email:any):boolean =>{
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    return validEmail.test(email)
}

const isNumber = (number:any): boolean =>{
    return typeof number === 'number'
}

const parsedInfo = (infoFromRequest: any): string =>{
    if(!isString(infoFromRequest)){
        throw new Error('Formato de nombre no valido')
    }

    return infoFromRequest
}

const parsedSpecialty = (specialty:any): SpecialtyType =>{
    if(!isSpecialty(specialty) || !isString(specialty)){
        throw new Error('Formato de especialidad no es valido')
    }

    return specialty
}

const parsedNumber = (officeFromRequest: any): number =>{
    if(!isNumber(officeFromRequest)){
        throw new Error('El formato de oficina no es valido')
    }
    return officeFromRequest
}

const parsedEmail = (emailFromRequest: any): string =>{
    if(!isEmail(emailFromRequest) || !isString(emailFromRequest)){
        throw new Error('El formato email no es valido')
    }
    return emailFromRequest
}

export const createDoctor = (object: any): NewDoctorType => {
    const newDoctor: NewDoctorType = {
        name: parsedInfo(object.name),
        lastname: parsedInfo(object.lastname),
        specialty: parsedSpecialty(object.specialty),
        office: parsedNumber(object.office),
        email: parsedEmail(object.email)
    }
    return newDoctor
}

export const createPatient = (object: any): NewPatientType => {
    const newPatient: NewPatientType = {
        name: parsedInfo(object.name),
        lastname: parsedInfo(object.lastname),
        documentNumber: parsedInfo(object.documentNumber),
        age: parsedNumber(object.age),
        phone: parsedInfo(object.phone)
    }

    return newPatient
}

export const createMedicalAppointment = (object: any): NewMedicalAppointmentType => {
    const newMedicalAppointment: NewMedicalAppointmentType = {
        documentNumberPatient: parsedInfo(object.documentNumberPatient),
        specialty: parsedSpecialty(object.specialty),
        doctorName: parsedInfo(object.doctorName),
        patientName: parsedInfo(object.patientName)
    }

    return newMedicalAppointment
}

