import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tollbar',
  templateUrl: './tollbar.component.html',
  styleUrls: ['./tollbar.component.scss']
})
export class TollbarComponent implements OnInit {

  @Output() toggleSidenav= new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
