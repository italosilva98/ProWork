import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Customer } from '../../models/customer-model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent implements OnInit {
  @Input() customerList: Customer[];

  customerListFiltered: Customer[];
  filter: string = '';
  maxSize: number = 7;
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = false;
  config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 3,
    currentPage: 1,
  };
  labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Proximo',
    screenReaderPaginationLabel: 'Paginação',
    screenReaderPageLabel: 'página',
    screenReaderCurrentLabel: `Você está na página`,
  };

  constructor() {}

  ngOnInit() {
    this.customerListFiltered = this.customerList;
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

  set cnpjFilter(filterBy: string) {
    this.customerListFiltered = this.customerList.filter(
      (customer: Customer) =>
        customer.idade.includes(filterBy) ||
        customer.nome.includes(filterBy) ||
        customer.telefone.includes(filterBy) ||
        customer.ultimaConsulta.includes(filterBy)
    );
  }
}
