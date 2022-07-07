import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app.state';
import { PokemonService } from 'src/app/services/pokemon.service';
import { loadCarrito } from 'src/app/state/actions/carrito.actions';
import { loadedPokemons, loadPokemon } from 'src/app/state/actions/pokemon.actions';
import { selectListPokemons, selectLoadingPokemons } from 'src/app/state/selectors/pokemons.selectors';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  loading$:Observable<boolean> = new Observable;
  pokemons$: Observable<any> = new Observable();
  constructor(private store: Store<AppState>, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loading$=this.store.select(selectLoadingPokemons)
    this.store.dispatch(loadPokemon())
    this.pokemons$ = this.store.select(selectListPokemons);

  }
  setPatron(unPatron:string){
    this.pokemonService.setPatron(unPatron)

  }
  getPatron(){
    return this.pokemonService.getPatron()
  }
}
