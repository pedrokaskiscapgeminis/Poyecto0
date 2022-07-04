import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app.state';
import { PokemonService } from 'src/app/services/pokemon.service';
import { decrement } from 'src/app/state/actions/counter.actions';
import { selectListCarrito } from 'src/app/state/selectors/carrito.selectors';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito$: Observable<any> = new Observable();
  constructor(private BDPokemon:PokemonService,private store: Store<AppState>) { }

  ngOnInit(): void {
    this.carrito$ = this.store.select(selectListCarrito);
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
