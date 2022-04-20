import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, switchMap } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.scss']
})
export class CompaniesIndexComponent implements OnInit {
  companies$!: Observable<Company[]>;

  constructor(
    private title: Title,
    private service: CompaniesService
  ) {
    this.title.setTitle('Lista de Compañías | Sistema de Héroes');
  }

  ngOnInit() {
    this.companies$ = this.service.getCompanies(); 
  }
}
