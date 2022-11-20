import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { SharedModule } from './../../shared/shared.module';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';

const routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'customer',
    component: CustomerDetailComponent
  }
]
const components = [
  CustomerListComponent, CustomersComponent, CustomerDetailComponent
]

@NgModule({
  declarations: [components],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [components]
})
export class CustomerModule { }
