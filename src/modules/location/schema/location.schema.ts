import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  @Prop({type: Types.ObjectId, nullable: false})
  _id: Types.ObjectId;

  @Prop({type: String, nullable: false})
  type: string;

  @Prop({type: [Number], nullable: false})
  coordinates: number[] | number[][];
}

export const LocationSchema = SchemaFactory.createForClass(Location);
