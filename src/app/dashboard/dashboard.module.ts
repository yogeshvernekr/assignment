import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { EmptyComponent } from './content/empty.component';
import { UserResolverService } from './content/user-resolver.service';

@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: 'dashboard', component: EmptyComponent },
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
