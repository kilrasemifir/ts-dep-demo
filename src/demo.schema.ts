import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class DemoEntity {

    @Prop({type: String, required: true})
    public _id!: string;

    @Prop({type: String, required: true})
    public name!: string;
}

export const DemoSchema = SchemaFactory.createForClass(DemoEntity);