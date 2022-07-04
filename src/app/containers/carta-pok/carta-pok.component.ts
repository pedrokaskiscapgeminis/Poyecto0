import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from 'src/app/services/pokemon.service';
import { increment } from 'src/app/state/actions/counter.actions';


@Component({
  selector: 'app-carta-pok',
  templateUrl: './carta-pok.component.html',
  styleUrls: ['./carta-pok.component.css']
})

export class CartaPokComponent implements OnInit {
  @Input() poke:any
 
  
  constructor(private BDPokemons:PokemonService,private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }
  addToCarrito(poke:any){
    
    this.BDPokemons.addToCarrito(poke)
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
}
