import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; //El decorador @Input indica que el heroe puede venir de fuera.
  @Input() indice: number;

  // Quiero emitir el indice (variable anterior) para pasarsela al metodo verHeroe() del padre
  // a través del EventEmitter y el Output.
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

   verHeroe(){
     this._router.navigate( ['/heroe', this.indice] );
    //this.heroeSeleccionado.emit(this.indice); //Ejemplo practico del output
   }

}
