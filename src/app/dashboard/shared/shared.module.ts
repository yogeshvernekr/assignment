import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert/alert.component';
import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AlertComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [AlertComponent, LoadingComponent, CommonModule],
})
export class SharedModule {}
