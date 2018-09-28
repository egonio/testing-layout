import { OrganizationDetailsComponent } from './organization/organization-details/organization-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/organizations', pathMatch: 'full' },
  { path: 'organizations', component: OrganizationComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: OrganizationListComponent},
      { path: ':id', component: OrganizationDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
