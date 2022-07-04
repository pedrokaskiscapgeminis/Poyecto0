import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from 'src/app/services/pokemon.service';
import { decrement } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private BDPokemon:PokemonService,private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }
  getCarrito(){
 
    return this.BDPokemon.getCarrito()
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
 removePokes(Pokes:any){
  return this.BDPokemon.removePokes(Pokes)
 }
 setPatron(unPatron:string){
  this.BDPokemon.setPatron(unPatron)

}
 getPatron(){
  return this.BDPokemon.getPatron()
 }
}
