import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({_id: false})
export class Coordinate {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const CoordinateSchema = SchemaFactory.createForClass(Coordinate);
