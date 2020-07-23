import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[];

  /* Por convención, se define con guión bajo a la variable a usar que va a recibir
   * los metodos que se definan en el servicio y que funcionarán aquí:
   * _heroesService: HeroesService ==> variable _heroesService que es de tipo HeroesService.
   */
  constructor(private _heroesService: HeroesService, 
              private _router:Router
              ) {}

   
   ngOnInit(): void {
     this.heroes = this._heroesService.getHeroes();
    //  console.log(this.heroes);
    }
    
  public verHeroe(indice: number){
    /* Se pone la barra delante de la palabra heroe, para que redirija bien: heroes/heroe:id
    * Gracias al Router.
    * Escribimos la palabra 'heroe' porque así está definido y es lo que espera nuestro fichero de rutas: app.route.ts
    */
    this._router.navigate( ['/heroe', indice] );
  }
}