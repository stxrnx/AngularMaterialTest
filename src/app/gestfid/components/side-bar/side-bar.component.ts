import { ClientiService } from './../../services/clienti.service';
import { IClienti } from './../../models/interfaces';

import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { response } from 'express';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

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
  private clientiService:ClientiService, private router:Router) { }

    @ViewChild(MatDrawer) drawer : MatDrawer;


  ngOnInit(): void {



    this.breakpointObserver
    //.observe([Breakpoints.XSmall, Breakpoints.Small])
    .observe([`(max-width: ${SMALL_WIDTH_BK}px)`])
    .subscribe((state:BreakpointState)=>{
      console.log(state.matches);
      this.isScreenSmall=state.matches;
    });

    this.getClienti();

    this.router.events.subscribe(()=>{
       if(this.isScreenSmall){
        this.drawer.close();
       }
    });
  }

  public getClienti(){
    this.clientiService.getAll().subscribe(
      response =>{
        console.log('Ricerchiamo tutti i clienti');

        this.clienti = response;
        console.log(this.clienti);

        if(this.clienti.length > 0)
        this.router.navigate(['/gestfid', this.clienti[0].codFid])
      },
      error =>{
        console.log(error);
      }
    )
  }

}
