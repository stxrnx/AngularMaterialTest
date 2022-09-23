import { ITransazioni } from './../../models/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  @Input() sales: ITransazioni[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.sales);
  }

}
