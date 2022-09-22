import { IClienti } from './../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private httpClient: HttpClient) { }

  getAll(){

    const Url=`${baseUrl}/cerca/`;

     return this.httpClient.get<IClienti[]>(Url)

  }

  getByCodFid(codfid :string){

    const Url=`${baseUrl}/cerca/${codfid}`;

    return this.httpClient.get<IClienti>(Url);
  }
}

