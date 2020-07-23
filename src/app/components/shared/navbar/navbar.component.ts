import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes: any = [];

  //ojo al definir las _varialbes, tienen que tener private, public, etc.
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

public buscarHeroe(textoBuscar: string){  
  this._router.navigate( ['/buscar',textoBuscar] );
}

}
