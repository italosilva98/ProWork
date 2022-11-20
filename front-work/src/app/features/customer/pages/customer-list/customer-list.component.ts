import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer-model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList = [
    {
      id: '1',
      nome: 'Ítalo Silvestre de oliveira da silva',
      idade: '24',
      telefone: '(19)9 9652-2834',
      cidade: 'Mogi Mirim',
      ultimaConsulta: '05/11/2021',
    },
    {
      id: '2',
      nome: 'nome da silva guanabara',
      idade: '32',
      telefone: '(19)9 9652-2834',
      cidade: 'Mogi Mirim',
      ultimaConsulta: '05/11/2021',
    },
    {
      id: '3',
      nome: 'Ítalo Silvestre',
      idade: '24',
      telefone: '(19)9 9652-2834',
      cidade: 'Mogi Mirim',
      ultimaConsulta: '05/11/2021',
    },
    {
      id: '4',
      nome: 'Ítalo Silvestre',
      idade: '24',
      telefone: '(19)9 9652-2834',
      cidade: 'Mogi Mirim',
      ultimaConsulta: '05/11/2021',
    },
    {
      id: '5',
      nome: 'Ítalo Silvestre de oliveira da silva',
      idade: '24',
      telefone: '(19)9 9652-2834',
      cidade: 'Mogi Mirim',
      ultimaConsulta: '05/11/2021',
    },
  ];

  constructor() { }

  ngOnInit() { }

}
