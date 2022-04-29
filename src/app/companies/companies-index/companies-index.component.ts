import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Observable, switchMap } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { Company } from '../company';
import { CompaniesDataSource } from './companies-datasource';

@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.scss']
})
export class CompaniesIndexComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Company>;
  dataSource: CompaniesDataSource;
  displayedColumns: string[];

  constructor(
    private title: Title
  ) {
    this.title.setTitle('Lista de Compañías | Sistema de Héroes');
    this.dataSource = new CompaniesDataSource();
    this.displayedColumns = ['id', 'description', 'country'];
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
