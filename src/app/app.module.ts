import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesIndexComponent } from './companies/companies-index/companies-index.component';
import { CompaniesAddComponent } from './companies/companies-add/companies-add.component';
import { CompaniesEditComponent } from './companies/companies-edit/companies-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesIndexComponent,
    CompaniesAddComponent,
    CompaniesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
