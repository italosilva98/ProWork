import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const materialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule,
  MatPaginatorModule,
  NgxPaginationModule
];

const commonModules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [
    commonModules,
    materialComponents,
  ],
  declarations: [],
  exports: [commonModules, materialComponents],
})
export class SharedModule { }
