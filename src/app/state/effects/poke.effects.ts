import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
import { loadedDetalles, loadedPokemon } from '../actions/detalles.actions';
import { loadedPokemons } from '../actions/pokemon.actions';
@Injectable()
export class pokeEffects {
 
  loadPokes$ = createEffect(() => this.actions$.pipe(
    ofType('[Pokemon List] Load success'),
    mergeMap(() => this.BDPokemons.getPokemon()
      .pipe(
        map((pokemons:any) => ({ type: '[Pokemon List] Loaded success', pokemons:pokemons.results })),
        catchError(() => EMPTY)
      ))
    )
  );
  loadDetalles$ = createEffect(() => this.actions$.pipe(
    ofType(loadedPokemon),
    mergeMap((action) => this.BDPokemons.Detalles(action.name)
      .pipe(
        map((detalles:any) => ({ type: '[Detalles List] Load success', detalles:detalles.abilities })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private BDPokemons: PokemonService
  ) {}
}