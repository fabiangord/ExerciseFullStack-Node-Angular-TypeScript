import { Prop, getModelForClass } from "@typegoose/typegoose"
import { SpecialtyType } from "../utils/enums"

class Doctors{
    @Prop({
        required:true,
        type: String,
        trim:true,
    })
    private name!:string

    @Prop({
        required:true,
        type: String,
        trim:true,
    })
    private lastname!:string

    @Prop({
        required:true,
        type: String,
        trim:true,
    })
    private specialty!: SpecialtyType

    @Prop({
        required:true,
        type: Number,
        trim:true,
    })
    private office!:number

    @Prop({
        required:true,
        type: String,
        trim:true,
        lowercase: true
    })
    private email!:string
}

const modelDoctors = getModelForClass(Doctors)

export default modelDoctors