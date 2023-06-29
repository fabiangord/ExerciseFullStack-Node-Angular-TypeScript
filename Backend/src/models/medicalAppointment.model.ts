import { Prop, getModelForClass } from '@typegoose/typegoose'
import { SpecialtyType } from '../utils/enums'

class MedicalAppointment {
  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly documentNumberPatient!: string

  @Prop({
    required: true,
    type: Object,
    trim: true
  })
  private readonly specialty!: SpecialtyType

  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly doctorName!: string

  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly patientName!: string
}

const modelMedicalAppointment = getModelForClass(MedicalAppointment)

export default modelMedicalAppointment
