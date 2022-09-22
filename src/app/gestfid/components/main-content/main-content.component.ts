import { response } from 'express';
import { ClientiService } from './../../services/clienti.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClienti } from '../../models/interfaces';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

    cliente: IClienti;
    codFid: string;

  constructor(private route: ActivatedRoute, private clienteService: ClientiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.codFid = params['codFid'];
      console.log("CodFid:" + this.codFid);

      this.clienteService.getByCodFid(this.codFid).subscribe(
        response =>{
          console.log('Ricerchiamo il cliente');

          this.cliente=response;
          console.log(this.cliente);
        },
        error =>{
          console.log(error);
        }
      )
    },
    error =>{
      console.log();
    })
  }

}
