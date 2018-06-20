import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ServerService } from './server.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ HttpModule,
    BrowserModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
