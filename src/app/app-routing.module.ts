import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesAddComponent } from './companies/companies-add/companies-add.component';
import { CompaniesEditComponent } from './companies/companies-edit/companies-edit.component';
import { CompaniesIndexComponent } from './companies/companies-index/companies-index.component';

const routes: Routes = [
  { path: '',   redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesIndexComponent },
  { path: 'companies/add', component: CompaniesAddComponent },
  { path: 'companies/edit/:id', component: CompaniesEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
