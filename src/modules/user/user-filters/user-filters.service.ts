import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CrudService } from '../../../shared/services/crud.service';
import { UserFilters, UserFiltersDocument } from './schema/user-filters.schema';


@Injectable()
export class UserFiltersService extends CrudService<UserFiltersDocument> {
  constructor(
    @InjectModel(UserFilters.name) private userFiltersModel: Model<UserFiltersDocument>,
  ) {
    super(userFiltersModel);
  }
}
