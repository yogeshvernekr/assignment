import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UserdetailsComponent } from './userdetails.component';

@NgModule({
  declarations: [UserdetailsComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserdetailsComponent,
      },
    ]),
  ],
})
export class UserDetailsModule {}
