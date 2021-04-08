import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({_id: false})
export class Coordinates {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);
