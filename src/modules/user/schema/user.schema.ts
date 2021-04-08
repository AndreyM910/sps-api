import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Coordinates, CoordinatesSchema } from './coordinates';

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

  @Prop({type: CoordinatesSchema })
  coordinates?: Coordinates;

  @Prop()
  address?: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
