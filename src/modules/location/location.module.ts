import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './schema/location.schema';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }]),
  ],
  providers: [LocationService],
  exports: [LocationService],
})
export class LocationModule {}

