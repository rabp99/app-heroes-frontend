import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-companies-add',
  templateUrl: './companies-add.component.html',
  styleUrls: ['./companies-add.component.scss']
})
export class CompaniesAddComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title: Title
  ) {
    this.title.setTitle('Nueva Compañía | Sistema de Héroes');
    this.companyForm = this.fb.group({
      description: [null, Validators.required],
      country: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(companyForm: FormGroup) {
    console.log(companyForm.value);
  }
}
