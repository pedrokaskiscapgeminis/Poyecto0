import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppCarState } from 'src/app/core/models/appCar.state';
import { PokemonService } from 'src/app/services/pokemon.service';
import { loadedCarrito } from 'src/app/state/actions/carrito.actions';
import { increment } from 'src/app/state/actions/counter.actions';
import { selectListCarrito } from 'src/app/state/selectors/carrito.selectors';
import { selectListPokemons } from 'src/app/state/selectors/pokemons.selectors';


@Component({
  selector: 'app-carta-pok',
  templateUrl: './carta-pok.component.html',
  styleUrls: ['./carta-pok.component.css']
})

export class CartaPokComponent implements OnInit {
  @Input() poke:any
 
  carrito$: Observable<any> = new Observable();
  
  pokemons$:Observable<any> = new Observable();
  constructor(private BDPokemons:PokemonService,private store: Store<AppCarState>) { }

  ngOnInit(): void {
    
    
  }
  addToCarrito(poke:any){
    
    this.BDPokemons.addToCarrito(poke)
    this.store.dispatch(loadedCarrito(poke));
  
    this.carrito$ = this.store.select(selectListCarrito);
   
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
}
