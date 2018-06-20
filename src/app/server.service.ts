import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {Headers, Http,Response} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class ServerService {

  constructor(private http : Http) { }
  storeServer(servers:any[]){
    const headers = new Headers({'content-type':'application/json'}) //we addesd header so that we can sent the request by adding path to it
    return this.http.post('https://http-ba748.firebaseio.com/data.json',servers, {headers:headers});//this is the post request 
    //we sent request to the server
  } //for put just put in place of post nd put will override the data it wont aadd the previous data
 getservers()
 {
   return this.http.get('https://http-ba748.firebaseio.com/data.json')
   .map(
    (response :Response) => { const data= response.json();
     return data;
    }
  };
}
