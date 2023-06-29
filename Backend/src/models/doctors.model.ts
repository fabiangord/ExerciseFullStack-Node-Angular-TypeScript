import { Prop, getModelForClass } from '@typegoose/typegoose'
import { SpecialtyType } from '../utils/enums'

class Doctors {
  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly name!: string

  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly lastname!: string

  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly specialty!: SpecialtyType

  @Prop({
    required: true,
    type: Number,
    trim: true
  })
  private readonly office!: number

  @Prop({
    required: true,
    type: String,
    trim: true,
    lowercase: true
  })
  private readonly email!: string
}

const modelDoctors = getModelForClass(Doctors)

export default modelDoctors
