import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Coordinate, CoordinateSchema } from './coordinate';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  authToken: string;

  @Prop()
  lastName?: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({type: CoordinateSchema, required: true })
  coordinate: Coordinate;
}

export const UserSchema = SchemaFactory.createForClass(User);
