import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeModule } from 'angular-gauge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharSelectTimerComponent } from './char-select-timer/char-select-timer.component';
import { CharacterTreeComponent } from './character-tree/character-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    CharSelectTimerComponent,
    CharacterTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
