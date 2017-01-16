import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getDataFromFirebase(){
    return this.http.get('https://test-7d635.firebaseio.com/title.json').map((response: Response) => response.json());
  }

  postDataToFireBase(user: any){
    const body = JSON.stringify(user);
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('https://test-7d635.firebaseio.com/data.json', body, {headers: headers});
    // .map((response: Response) => response.json());
  }

  getOwnDataFromFireBase(){
    return this.http.get('https://test-7d635.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

}
