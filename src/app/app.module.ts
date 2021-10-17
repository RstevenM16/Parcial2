import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { jugadoresService } from './servicios/jugadores.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { Jugadores1Component } from './components/jugadores1/jugadores1.component';
import { Jugadores2Component } from './components/jugadores2/jugadores2.component';
import { Jugadores3Component } from './components/jugadores3/jugadores3.component';
import { APP_ROUTING } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JugadoresComponent,
    Jugadores1Component,
    Jugadores2Component,
    Jugadores3Component,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [jugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
