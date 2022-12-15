import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdduserComponent } from './content/adduser/adduser.component';
import { UserdetailsComponent } from './content/userdetails/userdetails.component';

const routes: Routes = [
  { path: 'users', component: AdduserComponent },
  {
    path: 'users',
    component: AdduserComponent,
    children: [{ path: ':name', component: UserdetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
