import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app.state';

import { addToCart } from 'src/app/state/actions/carrito.actions';

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
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    
    
  }
  addToCarrito(carrit:any){
    
    
    this.store.dispatch(addToCart({carrit}));
    this.carrito$ = this.store.select(selectListCarrito);
   
  }
  
}
