import { Prop, getModelForClass } from "@typegoose/typegoose"
import { SpecialtyType } from "../utils/enums"

class MedicalAppointment {
    @Prop({
        required:true,
        type: String,
        trim: true
    })
    private documentNumberPatient!:string

    @Prop({
        required:true,
        type: SpecialtyType,
        trim: true
    })
    private specialty!: SpecialtyType

    @Prop({
        required:true,
        type: String,
        trim: true
    })
    private doctorName!:string

    @Prop({
        required:true,
        type: String,
        trim: true
    })
    private patientName!: string
}

const modelMedicalAppointment = getModelForClass(MedicalAppointment)

export default modelMedicalAppointment