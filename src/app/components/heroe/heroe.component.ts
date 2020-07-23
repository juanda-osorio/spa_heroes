import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from './../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  /*ActivatedRoute nos ayuda para que nos podamos 'suscribir' al envio/recepción de parametros. (Es un observador)
  */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) 
    {
      this._activatedRoute.params.subscribe( (params) => {
      // obtenemos el id que es lo que escribimos en el FICHERO de RUTAS, como parametro a recibir
      this.heroe = this._heroeService.getHeroe( params['id'] );
    });
  }

  ngOnInit(): void {}
}
