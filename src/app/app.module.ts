import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './Directives/ng-if/ng-if.component';
import { NgForComponent } from './Directives/ng-for/ng-for.component';
import { NgFor2Component } from './Directives/ng-for2/ng-for2.component';
import { TpComponent } from './tp/tp.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgFor2Component,
    TpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
