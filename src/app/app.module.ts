import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TworldComponent } from './tworld/tworld.component';
import { SallyComponent } from './sally/sally.component';
import { ChocoaComponent } from './chocoa/chocoa.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  declarations: [
    AppComponent,
    TworldComponent,
    SallyComponent,
    ChocoaComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
