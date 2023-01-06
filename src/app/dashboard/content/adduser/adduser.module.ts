import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdduserComponent } from './adduser.component';

@NgModule({
  declarations: [AdduserComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdduserComponent,
      },

      {
        path: ':name',
        loadChildren: () =>
          import('../userdetails/userdetail.module').then(
            (m) => m.UserDetailsModule
          ),
      },
    ]),
  ],
})
export class ContentModule {}
