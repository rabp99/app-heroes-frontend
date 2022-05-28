import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, catchError, of, finalize } from 'rxjs';
import { Company } from '../company';
import { CompaniesService } from '../companies.service';

export class CompaniesDataSource extends DataSource<Company> {
  private companiesSubject = new BehaviorSubject<Company[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public count$ = this.countSubject.asObservable();

  constructor(private companiesService: CompaniesService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Company[]> {
    return this.companiesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.companiesSubject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }

  loadCompanies() {
    this.loadingSubject.next(true);

    this.companiesService.getCompanies()
    .pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
    .subscribe((res: any) => {
      this.countSubject.next(res.meta.total);
      this.companiesSubject.next(res.data);
    });
  }
}