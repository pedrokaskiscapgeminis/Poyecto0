import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app.state';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Delete, loadCarrito } from 'src/app/state/actions/carrito.actions';
import { decrement } from 'src/app/state/actions/counter.actions';
import { loadDetalles } from 'src/app/state/actions/detalles.actions';
import { selectListCarrito, selectLoadingCarrito } from 'src/app/state/selectors/carrito.selectors';
import { selectListDetalles, selectLoadingDetalles } from 'src/app/state/selectors/detalles.selectors';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  loading$:Observable<boolean> = new Observable;
  carrito$: Observable<any> = new Observable();
  detalles$: Observable<any> = new Observable();
  constructor(private BDPokemon:PokemonService,private store: Store<AppState>,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading$=this.store.select(selectLoadingCarrito);
    this.store.dispatch(loadCarrito());
    this.carrito$ = this.store.select(selectListCarrito);

    this.loading$=this.store.select(selectLoadingDetalles)
    this.store.dispatch(loadDetalles())
    this.detalles$ = this.store.select(selectListDetalles);
    
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  DeletePok(carri:any){
    this.store.dispatch(Delete({carri}))
 }
 setPatron(unPatron:string){
  this.BDPokemon.setPatron(unPatron)

}
Detalles(name:string){
  
  this.BDPokemon.Detalles(name)
 
 }
 getPatron(){
  return this.BDPokemon.getPatron()
 }


}
