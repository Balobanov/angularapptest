import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

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

    return this.http.post('https://test-7d635.firebaseio.com/data.json', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch(this.errorHandl);
  }

  getOwnDataFromFireBase(){
    return this.http.get('https://test-7d635.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  errorHandl(error: any){
    console.log(error);
    return Observable.throw(error.json());
  }

}
