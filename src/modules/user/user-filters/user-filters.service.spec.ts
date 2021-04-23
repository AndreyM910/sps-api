import { Test, TestingModule } from '@nestjs/testing';
import { UserFiltersService } from './user-filters.service';

describe('UserFiltersService', () => {
  let service: UserFiltersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFiltersService],
    }).compile();

    service = module.get<UserFiltersService>(UserFiltersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
