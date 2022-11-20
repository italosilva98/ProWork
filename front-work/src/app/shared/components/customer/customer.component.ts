import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerData: FormGroup;
  readOnlyForm = true;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.getDados();
  }

  editar() {
    this.readOnlyForm = false;
  }

  cancelar() {
    this.getDados();
    this.readOnlyForm = true;
  }

  getDados() {
    this.customerData = this.fb.group({
      nome: this.customerService.getDadosPessoais().nome,
      idade: this.customerService.getDadosPessoais().idade,
      sexo: this.customerService.getDadosPessoais().sexo,
      exercicio: this.customerService.getDadosPessoais().exercicio,
      cirurgia: this.customerService.getDadosPessoais().cirurgia,
      medicamentos: this.customerService.getDadosPessoais().medicamentos,
      cancer: this.customerService.getDadosPessoais().cancer,
      corona: this.customerService.getDadosPessoais().corona,
    });
  }
}
