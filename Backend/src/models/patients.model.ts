import { Prop, getModelForClass } from '@typegoose/typegoose'

class Patients {
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
  private readonly documentNumber!: string

  @Prop({
    required: true,
    type: Number,
    trim: true
  })
  private readonly age!: number

  @Prop({
    required: true,
    type: String,
    trim: true
  })
  private readonly phone!: string
}

const modelPatients = getModelForClass(Patients)

export default modelPatients
