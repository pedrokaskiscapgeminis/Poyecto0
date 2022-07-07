import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Mesh } from "three";
import { NgtRenderState,NgtVector3 } from "@angular-three/core";

import {  } from "@angular-three/core";
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { Store } from "@ngrx/store";
import { addToCart } from "../state/actions/carrito.actions";

import { increment } from "../state/actions/counter.actions";
import { Observable } from "rxjs";
import { selectListCarrito } from "../state/selectors/carrito.selectors";
import { AppState } from "../core/models/app.state";

@Component({
  selector: "app-cube",
  templateUrl: "cube.component.html", 
  providers: [NgtTextureLoader],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeComponent implements OnInit  {
  readonly texture$ = this.textureLoader.load('./assets/img/color.jpg');
  carrito$: Observable<any> = new Observable();
  
  pokemons$:Observable<any> = new Observable();
  constructor(private store: Store<AppState>, private textureLoader: NgtTextureLoader) { }

  ngOnInit(): void {
  }
  @Input() position?: NgtVector3;
  @Input() poke:any
  
  hovered = false;
  hovered1 = false;
  hovered2=false
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    
    
  }
  addToCarrito(carrit:any){
    
    
    this.store.dispatch(addToCart({carrit}));
    this.carrito$ = this.store.select(selectListCarrito);
   
  }
  onIncrement(incre:any) {
    this.store.dispatch(increment({incre}));
  }

}