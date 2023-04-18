import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesService } from '../companies.service';
import { CompaniesResolver } from './companies.resolver';

describe('CompaniesResolver', () => {
  let resolver: CompaniesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompaniesService, CompaniesResolver],
    }).compile();

    resolver = module.get<CompaniesResolver>(CompaniesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should query for a single company', () => {
    const id = 'uuid-18';
    const result = resolver.company(id);
    expect(result.id).toEqual(id);
  });

  it('should query all company', () => {
    const result = resolver.companies();
    expect(result[0].id).toEqual('uuid-1');
  });
});
