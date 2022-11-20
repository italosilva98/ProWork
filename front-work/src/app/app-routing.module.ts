import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./features/customer/customer.module').then(m => m.CustomerModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
