import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RaceComponent } from './components/race/race.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { MaterialModule } from './modules/material/material.module';
import { PercentPipe } from './pipes/percent.pipe';
import { FilterPoniesPipe } from './pipes/filter-ponies.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RaceComponent,
    RainbowDirective,
    PercentPipe,
    FilterPoniesPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [
    FilterPoniesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
