import { NewDoctorType, NewMedicalAppointmentType, NewPatientType } from '../types/types'
import { SpecialtyType } from './enums'

const isString = (string: any): boolean => {
  return typeof string === 'string'
}

const isStringNet = (string: any): boolean => {
  const validString = /^[A-Z]+$/i
  return validString.test(string)
}

const isSpecialty = (specialtyFromRequest: any): boolean => {
  return Object.values(SpecialtyType).includes(specialtyFromRequest)
}

const isEmail = (email: any): boolean => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  return validEmail.test(email)
}

const isNumber = (number: any): boolean => {
  return typeof number === 'number'
}

const parsedString = (stringFromRequest:any ):string =>{
  if(!isStringNet(stringFromRequest)){
    throw new Error
  }

  return stringFromRequest

}

const parsedInfo = (infoFromRequest: any): string => {
  if (!isString(infoFromRequest)) {
    throw new Error('Formato de info no valido')
  }

  return infoFromRequest
}

const parsedSpecialty = (specialty: any): SpecialtyType => {
  if (!isSpecialty(specialty) || !isString(specialty)) {
    throw new Error('Formato de especialidad no es valido')
  }

  return specialty
}

const parsedNumber = (officeFromRequest: any): number => {
  if (!isNumber(officeFromRequest)) {
    throw new Error('El formato de oficina no es valido')
  }
  return officeFromRequest
}

const parsedEmail = (emailFromRequest: any): string => {
  if (!isEmail(emailFromRequest) || !isString(emailFromRequest)) {
    throw new Error('El formato email no es valido')
  }
  return emailFromRequest
}

export const parsedError = (error:any) => {
    if (typeof error.message !== 'undefined') {
        const mensajeError = error.message;
        return mensajeError
      } else {
        const mensajeError = 'error desconocido'
        return mensajeError
    }
}

export const createDoctor = (object: any): NewDoctorType => {
  const newDoctor: NewDoctorType = {
    name: parsedString(object.name),
    lastname: parsedString(object.lastname),
    specialty: parsedSpecialty(object.specialty),
    office: parsedNumber(object.office),
    email: parsedEmail(object.email)
  }
  return newDoctor
}

export const createPatient = (object: any): NewPatientType => {
  const newPatient: NewPatientType = {
    name: parsedString(object.name),
    lastname: parsedString(object.lastname),
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
    doctorName: parsedString(object.doctorName),
    patientName: parsedString(object.patientName)
  }

  return newMedicalAppointment
}
