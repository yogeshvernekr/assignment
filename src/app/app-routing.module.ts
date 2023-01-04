import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './dashboard/content/adduser/adduser.component';
import { UserdetailsComponent } from './dashboard/content/userdetails/userdetails.component';
import { EmptyComponent } from './dashboard/content/empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { NotfoundComponent } from './notfound/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   loadChildren: () =>
  //     import('./notfound/notfound/notfound.component').then(
  //       (m) => m.NotfoundComponent
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
