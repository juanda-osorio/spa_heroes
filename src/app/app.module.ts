import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; //importado de un compañero, para que no haga el submit al usar la barra de busqueda.

//RUTAS
//import { APP_ROUTING } from "./app.routes"; //se debe implementar en imports (mas abajo)
import { AppRoutingModule } from "./app-routing.module";


//SERVICIOS: Se colocan en 'providers'.
import { HeroesService } from './servicios/heroes.service';


//COMPONENTES: Se colocan en 'declarations'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    //APP_ROUTING,
    FormsModule
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
