import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
    /*ruta y tipo de componente que se tiene que importar.*/
    
    //path:home ==> es la ruta que se verá en la url.
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent }, // : ==> recibe un parametro. id ==> parametro a recibir
    { path: 'buscar/:texto', component: BuscadorComponent }, // 
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
    
];

// APP_ROUTING: será la constante que se importará en el app.module.ts para que angular use las rutas
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES/*, {useHash:true}*/); 
