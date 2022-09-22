import { ClientiService } from './../../services/clienti.service';
import { IClienti } from './../../models/interfaces';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { response } from 'express';

const SMALL_WIDTH_BK=720;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

 public isScreenSmall: boolean=false;

clienti: IClienti[]=[];

  constructor(private breakpointObserver: BreakpointObserver, 
  private clientiService:ClientiService,) { }

  ngOnInit(): void {



    this.breakpointObserver
    //.observe([Breakpoints.XSmall, Breakpoints.Small])
    .observe([`(max-width: ${SMALL_WIDTH_BK}px)`])
    .subscribe((state:BreakpointState)=>{
      console.log(state.matches);
      this.isScreenSmall=state.matches
    })

    this.getClienti();
  }

  public getClienti(){
    this.clientiService.getAll().subscribe(
      response =>{
        console.log('Ricerchiamo tutti i clienti');

        this.clienti = response;
        console.log(this.clienti);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
