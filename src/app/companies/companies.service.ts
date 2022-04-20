import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Company } from './company';
import { COMPANIES } from './mock-companies';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return of(COMPANIES);
  }

  getCompany(id: number) {
    return this.getCompanies().pipe(
      // (+) before `id` turns the string into a number
      map((companies: Company[]) => companies.find(company => company.id === +id)!)
    );
  }
}