import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesIndexComponent } from './companies/companies-index/companies-index.component';

const routes: Routes = [
  { path: '',   redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
