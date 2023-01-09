import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdduserComponent } from './adduser.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@NgModule({
  declarations: [AdduserComponent, UserdetailsComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdduserComponent,
        children: [
          {
            path: ':name',
            component: UserdetailsComponent,
          },
        ],
      },
    ]),
  ],
})
export class ContentModule {}
