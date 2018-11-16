import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AnnoncesComponent } from './Components/annonces/annonces.component';
import { ListAnnoncesComponent } from './Components/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './Components/estimation-cout/estimation-cout.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }