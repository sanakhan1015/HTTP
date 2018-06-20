import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response} from '@angular/http'
import 'rxjs/Rx'
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[
    {
      name : 'sana',
      capacity : 10,
      id: this.generateId()
    },
    {
      name : 'saba',
      capacity : 20,
      id: this.generateId()
    }
  ];
  constructor(private serverservice : ServerService)
  {

  }
  OnAddServer(name:String)
  {
    this.servers.push(
      {
        name : 'Atul',
        capacity : 30,
        id: this.generateId()
       } );
      }
     onsave()
     {
 this.serverservice.storeServer(this.servers)
 .subscribe(
   (response)=>{console.log(response)},
   (error)=>{console.log(error)}
 )
      }
  private generateId()
    { 
   return Math.round(Math.random() * 10000);
    }
  onget()
  {this.serverservice.getservers()
    //.subscribe( (response : Response) => { const data= response.json() //we now shift the data to map so we will get the data from service
     // console.log(data)}, //response will generate javascript
     // (response)=>{console.log(response)}, // for noraml data
     // (error)=>{console.log(error)}
     .subscribe
     ( (server : any[])=> { console.log(server)},//after map is used we are sending the response from
     //service 
     (error) => {console.log(error)}
      ) }
  }

