import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  cards = ["Anamnese","Anamnese","Anamnese","Anamnese"]
  constructor() { }

  ngOnInit(): void {
  }

}
