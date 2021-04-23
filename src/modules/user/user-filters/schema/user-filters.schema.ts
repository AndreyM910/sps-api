import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserFiltersDocument = UserFilters & Document;

@Schema()
export class UserFilters {
  @Prop({ required: false, default: 30 })
  radius: number;
}

export const UserFiltersSchema = SchemaFactory.createForClass(UserFilters);
