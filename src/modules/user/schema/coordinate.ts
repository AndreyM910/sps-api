import { Prop } from '@nestjs/mongoose';

export class Coordinate {
  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}
