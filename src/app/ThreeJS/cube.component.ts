import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Mesh } from "three";
import { NgtRenderState,NgtVector3 } from "@angular-three/core";

import {  } from "@angular-three/core";
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { Store } from "@ngrx/store";

@Component({
  selector: "app-cube",
  templateUrl: "cube.component.html", 
  providers: [NgtTextureLoader],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeComponent implements OnInit  {
  readonly texture$ = this.textureLoader.load('assets/color.jpg');
  constructor(private store: Store<{ counter: { counter: number } }>, private textureLoader: NgtTextureLoader) { }

  ngOnInit(): void {
  }
  @Input() position?: NgtVector3;
    
  hovered = false;
  hovered1 = false;
  hovered2=false
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    const cube = $event.object;
    
    
  }
  

}