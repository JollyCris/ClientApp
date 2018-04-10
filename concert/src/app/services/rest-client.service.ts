import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class RestClientService {
  baseUrl = `./assets/data`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  get(serviceName: string): Observable < any > {
    const url = `${this.baseUrl}/${serviceName}.json`;

    // let t1 = Date.now() + 1000;
    // while(t1>Date.now());

    return this.httpClient.get < any > (url)
      .map(resp => {
        return resp;
      });
  }
}
