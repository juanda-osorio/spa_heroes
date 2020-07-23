import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroesObj : Heroe[];
  textoBuscar: string;
  

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) {
      
    }
    
    ngOnInit() {
      this._activatedRoute.params.subscribe( 
        (params) =>{
          this.textoBuscar = params['texto'];
          this.heroesObj =  this._heroeService.buscarHeroes(this.textoBuscar);
          console.log(this.heroesObj);
        }
      );
    }

}
