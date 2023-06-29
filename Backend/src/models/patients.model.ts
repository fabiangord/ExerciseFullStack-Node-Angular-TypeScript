import { Prop, getModelForClass } from "@typegoose/typegoose"

class Patients {

    @Prop({
        required: true,
        type: String,
        trim: true
    })
    private name!:string

    @Prop({
        required: true,
        type: String,
        trim: true
    })
    private lastname!:string

    @Prop({
        required: true,
        type: String,
        trim: true
    })
    private documentNumber!:string

    @Prop({
        required: true,
        type: Number,
        trim: true
    })
    private age!:number

    @Prop({
        required: true,
        type: String,
        trim: true
    })
    private phone!:string
}

const modelPatients = getModelForClass(Patients)

export default modelPatients