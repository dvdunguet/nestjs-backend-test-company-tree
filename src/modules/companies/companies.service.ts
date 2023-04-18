import { Injectable } from '@nestjs/common';
import { Company } from './entities/company.entity';
import * as companiesMocks from '../../mocks/companies.json';
import * as travelsMocks from '../../mocks/travels.json';

@Injectable()
export class CompaniesService {
  private readonly companies: Company[];

  constructor() {
    this.companies = this.mapDataMock();
  }

  findAll() {
    return [this.companies[0]];
  }

  findById(id: string) {
    return this.companies.find((company) => company.id === id);
  }

  private mapDataMock() {
    const companies: Company[] = companiesMocks;
    // map travel to company
    for (const travel of travelsMocks) {
      const companyFinded = companies.find(
        (comp) => comp.id === travel.companyId,
      );
      if (!companyFinded) throw new Error('Company not found');
      companyFinded.travels = companyFinded.travels ?? [];
      companyFinded.travels.push(travel);
    }

    // map company to company and caculate travel cost
    for (const child of companies) {
      child.cost = child.travels.reduce((a, b) => a + Number(b.price), 0);
      const parent = companies.find((comp) => comp.id === child.parentId);
      if (!parent) continue;
      parent.children = parent.children ?? [];
      parent.children.push(child);
    }

    return companies;
  }
}
