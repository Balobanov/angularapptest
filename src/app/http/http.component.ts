import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import {HttpService} from "./http.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {

  myData: string = '';

  users: any[] = [];

  asyncData= this.httpService.getDataFromFirebase();

  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

  sendGET(){
    this.httpService.getDataFromFirebase().subscribe(
      (data: any) => {
        this.myData = data;
        console.log(data);
      }
    );
  }

  storeData(name: string, email: string){
    this.httpService.postDataToFireBase({username: name, email: email}).subscribe(
      (data) => console.log(data)
    );
  }

  getOwnData(){
    this.httpService.getOwnDataFromFireBase().subscribe(
      (data: any) => {
        console.log(data);
        const users=[];
        for(let key in data){
          users.push(data[key]);
        }

        this.users = users;
      }
    );
  }
}
