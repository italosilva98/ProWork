import { SharedModule } from './../shared.module';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule],
  declarations: [CustomerComponent],
  exports: [CustomerComponent],
})
export class ComponentsModule {}
