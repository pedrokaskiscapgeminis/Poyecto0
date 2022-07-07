import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootComponent } from './components/foot/foot.component';
import { HeadComponent } from './components/head/head.component';
import { ListadoComponent } from './components/listado/listado.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CartaPokComponent } from './containers/carta-pok/carta-pok.component';
import { pokemonsReducer } from './state/reducers/pokemons.reducer';
import { counterReducer } from './state/reducers/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { CarritoComponent } from './containers/carrito/carrito.component';
import { BuscadorPipe } from './filtros/buscador.pipe';
import { ComparadorPipe } from './filtros/comparador.pipe';
import { pokeEffects } from './state/effects/poke.effects';
import { carritoReducer } from './state/reducers/carrito.reducer';
import { detallesReducer } from './state/reducers/detalles.reducers';
import { CubeComponent } from "./ThreeJS/cube.component";
import { NgtCanvasModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtBoxGeometryModule,
  NgtConeGeometryModule,
  NgtPlaneGeometryModule,
  NgtSphereGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtMeshBasicMaterialModule,
  NgtMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
  NgtDirectionalLightModule,
} from '@angular-three/core/lights';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    HeadComponent,
    ListadoComponent,
    NavMenuComponent,
    CartaPokComponent,
    CarritoComponent,
    BuscadorPipe,
    CubeComponent,
    ComparadorPipe,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({pokemons: pokemonsReducer, counter: counterReducer,carrito: carritoReducer, detalles: detallesReducer}),
    EffectsModule.forRoot([pokeEffects]),
   
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    NgtCanvasModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtConeGeometryModule,
    NgtPlaneGeometryModule,
    NgtSphereGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtMeshStandardMaterialModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtDirectionalLightModule,
    NgtSobaOrbitControlsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
