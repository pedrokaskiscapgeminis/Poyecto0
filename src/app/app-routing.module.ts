import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { CarritoComponent } from './containers/carrito/carrito.component';

const routes: Routes = [{path:'listado',component:ListadoComponent},
{path:'carrito',component:CarritoComponent},
{path: '',redirectTo:'/listado',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
