import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CrudService } from '../../shared/services/crud.service';
import { UserFiltersService } from './user-filters/user-filters.service';

@Injectable()
export class UserService extends CrudService<UserDocument> {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly userFiltersService: UserFiltersService,
  ) {
    super(userModel);
  }

  async create<T>(data: T, lean: boolean = false): Promise<UserDocument> {
    const userFilters = await this.userFiltersService.create({}, true);
    return super.create({...data, userFiltersId: userFilters._id}, lean);
  }

  async searchUsers(userId: Types.ObjectId) {
    const user = await this.findById(userId);
    const userFilters = await this.userFiltersService.findById(user.userFiltersId);

  }
}
