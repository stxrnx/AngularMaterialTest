import { IClienti } from './../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private httpClient: HttpClient) { }

  getAll(){

    const Url="/api/clienti";
     return this.httpClient.get<IClienti[]>(Url);
  }
}

