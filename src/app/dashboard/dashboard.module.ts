import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { UserdetailsComponent } from './content/userdetails/userdetails.component';
import { AdduserComponent } from './content/adduser/adduser.component';
import { EmptyComponent } from './content/empty.component';

@NgModule({
  declarations: [
    AdduserComponent,
    UserdetailsComponent,
    DashboardComponent,
    ContentComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: 'dashboard', component: EmptyComponent },
          {
            path: 'users',
            component: AdduserComponent,
            children: [{ path: ':name', component: UserdetailsComponent }],
          },
        ],
      },
    ]),
  ],
})
export class DashboardModule {}
