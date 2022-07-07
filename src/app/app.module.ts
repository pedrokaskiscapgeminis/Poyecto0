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
import { environment } from 'src/environments/environment';
import { CarritoComponent } from './containers/carrito/carrito.component';
import { BuscadorPipe } from './filtros/buscador.pipe';
import { ComparadorPipe } from './filtros/comparador.pipe';
import { pokeEffects } from './state/effects/poke.effects';
import { carritoReducer } from './state/reducers/carrito.reducer';
import { detallesReducer } from './state/reducers/detalles.reducers';

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
    ComparadorPipe
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
