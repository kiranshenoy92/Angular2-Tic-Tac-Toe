import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BattelfieldComponent } from './component/battelfield/battelfield.component';
import { TickDirective } from './directives/tick.directive';
import { GameService } from './service/game.service';
import { ResetDirective } from './directives/reset.directive';
import { HomeComponent } from './component/home/home.component';
import { Battelfield2playerComponent } from './component/battelfield-2player/battelfield-2player.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BattelfieldComponent,
    TickDirective,
    ResetDirective,
    HomeComponent,
    Battelfield2playerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
