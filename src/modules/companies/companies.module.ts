import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './resolvers/companies.resolver';

@Module({
  providers: [CompaniesService, CompaniesResolver],
})
export class CompaniesModule {}
