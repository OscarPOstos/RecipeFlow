import { Test, TestingModule } from '@nestjs/testing';
import { FamilyGroupService } from './family-group.service';

describe('FamilyGroupService', () => {
  let service: FamilyGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyGroupService],
    }).compile();

    service = module.get<FamilyGroupService>(FamilyGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
