import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrganizationComponent } from './organization/organization.component';
import { UserListCardComponent } from './common/user-list-card/user-list-card.component';
import { ReportListComponent } from './common/report-list/report-list.component';
import { UserDetailComponent } from './common/user-detail/user-detail.component';
import { ReportDetailComponent } from './common/report-detail/report-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';
import { OrganizationDetailsComponent } from './organization/organization-details/organization-details.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    UserListCardComponent,
    ReportListComponent,
    UserDetailComponent,
    ReportDetailComponent,
    UserListComponent,
    OrganizationListComponent,
    OrganizationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
