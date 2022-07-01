import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private BDPokemon:PokemonService) { }

  ngOnInit(): void {
  }
  getCarrito(){
 
    return this.BDPokemon.getCarrito()
  }
}
