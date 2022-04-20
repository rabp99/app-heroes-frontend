import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies-edit',
  templateUrl: './companies-edit.component.html',
  styleUrls: ['./companies-edit.component.scss']
})
export class CompaniesEditComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title: Title,
    private route: ActivatedRoute,
    private service: CompaniesService
  ) { 
    this.title.setTitle('Modificar Compañía | Sistema de Héroes');
    this.companyForm = this.fb.group({
      description: [null, Validators.required],
      country: [null, Validators.required]
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCompany(Number(id))
      .subscribe((company: Company) => this.companyForm.patchValue(company));
  }

  ngOnInit(): void {
  }

  onSubmit(companyForm: FormGroup) {
    console.log(companyForm.value);
  }
}
