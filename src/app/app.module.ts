import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LengthComponent } from './length/length.component';
import { WeightComponent } from './weight/weight.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LengthComponent,
    WeightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
