import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CrudService } from '../../shared/services/crud.service';
import { LocationDocument } from './schema/location.schema';

@Injectable()
export class LocationService extends CrudService<LocationDocument> {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
  ) {
    super(locationModel);
  }
}
