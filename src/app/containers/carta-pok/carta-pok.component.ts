import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-carta-pok',
  templateUrl: './carta-pok.component.html',
  styleUrls: ['./carta-pok.component.css']
})

export class CartaPokComponent implements OnInit {
  @Input() poke:any
 
  
  constructor(private BDPokemons:PokemonService) { }

  ngOnInit(): void {
  }
  addToCarrito(poke:any){
    
    this.BDPokemons.addToCarrito(poke)
  }
}
