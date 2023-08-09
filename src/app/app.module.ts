import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heros/hero/hero.component';
import { ListComponent } from './heros/list/list.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
