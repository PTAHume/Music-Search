import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  loading: boolean = false;
  constructor(private http: HttpClient) {}

  search(term: string): Observable<any> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    let response = this.http.get<any>(apiURL);
    console.log(response);
    return response;
  }
}
/*
headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        MyClientCert: '', // This is empty
        MyToken: '', // This is empty
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      }),
      */
