import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app.state';
import { PokemonService } from 'src/app/services/pokemon.service';
import { loadedPokemons } from 'src/app/state/actions/pokemon.actions';
import { selectListPokemons } from 'src/app/state/selectors/pokemons.selectors';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
 
  pokemons$: Observable<any> = new Observable();
  constructor(private store: Store<AppState>, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((res: any) => {//No funciona el effects por eso dejo esto
      this.store.dispatch(loadedPokemons({ pokemons: res.results }));
      this.pokemons$ = this.store.select(selectListPokemons);
      
  });
  }
  setPatron(unPatron:string){
    this.pokemonService.setPatron(unPatron)

  }
  getPatron(){
    return this.pokemonService.getPatron()
  }
}
