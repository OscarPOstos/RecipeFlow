import { Test, TestingModule } from '@nestjs/testing';
import { FamilyGroupController } from './family-group.controller';

describe('FamilyGroupController', () => {
  let controller: FamilyGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilyGroupController],
    }).compile();

    controller = module.get<FamilyGroupController>(FamilyGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
