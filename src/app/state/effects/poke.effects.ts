import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
@Injectable()
export class pokeEffects {
 
  loadPokes$ = createEffect(() => this.actions$.pipe(
    ofType('[Pokemon List] Load success'),//aqui iría el loaded, pero no lo tengo creado jejeje
    mergeMap(() => this.BDPokemons.getPokemon()
      .pipe(
        map((pokemons:any) => ({ type: '[Pokemon List] Loaded success', pokemons: pokemons.results, })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private BDPokemons: PokemonService
  ) {}
}