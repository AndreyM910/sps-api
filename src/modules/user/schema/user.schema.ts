import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coordinate } from './coordinate';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName?: string;

  @Prop()
  email: string;

  @Prop()
  coordinate: Coordinate;
}

export const UserSchema = SchemaFactory.createForClass(User);
