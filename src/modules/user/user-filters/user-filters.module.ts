import { Module } from '@nestjs/common';
import { UserFiltersService } from './user-filters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFilters, UserFiltersSchema } from './schema/user-filters.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserFilters.name, schema: UserFiltersSchema }]),
  ],
  providers: [UserFiltersService],
  exports: [UserFiltersService],
})
export class UserFiltersModule {}
