import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.scss']
})
export class CompaniesIndexComponent implements OnInit {
  companies: any[];
  constructor() {
    this.companies = [{
        id: 1,
        description: 'MARVEL',
        country: 'USA'
      }, {
        id: 2,
        description: 'SHONEN JUMP',
        country: 'JAPÓN'
      }
    ]
  }

  ngOnInit(): void {
  }

}
