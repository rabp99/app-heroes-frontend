import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../shared/services/config.service';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getCompanies(): Observable<Company[]> {
    const url = `${this.config.getApiV1Url()}/companies`;
    return this.http.get<Company[]>(url);
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this.config.getApiV1Url()}/companies/${id}`;
    return this.http.get<Company>(url).pipe(
      map((data: any) => data.company),
      catchError(error => {
          console.error(error.error.errors);
          return throwError(error.error.message);  
      })
    );
  }
}