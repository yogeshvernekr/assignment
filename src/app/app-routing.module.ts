import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './content/adduser/adduser.component';
import { UserdetailsComponent } from './content/userdetails/userdetails.component';
import { EmptyComponent } from './content/empty.component';

const routes: Routes = [
  { path: 'dashboard', component: EmptyComponent },
  { path: 'users', component: AdduserComponent },
  {
    path: 'users',
    component: AdduserComponent,
    children: [{ path: ':name', component: UserdetailsComponent }],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
