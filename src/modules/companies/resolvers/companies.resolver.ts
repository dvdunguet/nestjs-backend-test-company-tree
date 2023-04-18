import { Resolver, Query, Args } from '@nestjs/graphql';
import { CompaniesService } from '../companies.service';
import { Company } from '../entities/company.entity';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => [Company])
  companies(): Company[] {
    return this.companiesService.findAll();
  }

  @Query(() => Company)
  company(@Args('id') id: string): Company {
    return this.companiesService.findById(id);
  }
}
