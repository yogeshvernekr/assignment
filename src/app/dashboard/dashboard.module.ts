import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { UserResolverService } from './content/user-resolver.service';
import { ChartsComponent } from './charts/charts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    SidebarComponent,
    HeaderComponent,
    ChartsComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

          { path: 'dashboard', component: ChartsComponent },
          {
            path: 'users',
            loadChildren: () =>
              import('./content/adduser/adduser.module').then(
                (m) => m.ContentModule
              ),
            resolve: { users: UserResolverService },
          },
        ],
      },
    ]),
  ],
})
export class DashboardModule {}
