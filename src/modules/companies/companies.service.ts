import { Injectable } from '@nestjs/common';
import { Company } from './entities/company.entity';
import Bignumber from 'bignumber.js';
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

  calcCostCompany(company: Company): void {
    if (company.children?.length) {
      company.children.map((c) => this.calcCostCompany(c));
    }
    const costCurrentCompany =
      company.travels?.reduce((a, b) => a.plus(b.price), Bignumber(0)) ??
      Bignumber(0);
    const costChildrenCompany =
      company.children?.reduce((a, b) => a.plus(b.cost), Bignumber(0)) ??
      Bignumber(0);
    company.cost = costCurrentCompany.plus(costChildrenCompany).toFixed();
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
      const parent = companies.find((comp) => comp.id === child.parentId);
      if (!parent) continue;
      parent.children = parent.children ?? [];
      parent.children.push(child);
    }
    this.calcCostCompany(companies[0]);
    return companies;
  }
}
