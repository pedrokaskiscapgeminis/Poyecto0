import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { increment } from '../state/actions/counter.actions';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pok:any
  private patron:string = ""
  private carrito:any[] = []
  private urlPokemon = "https://pokeapi.co/api/v2/pokemon"
  constructor(private http:HttpClient) { 
    
    http.get(this.urlPokemon).subscribe((response:any)=>{
      this.pok = response.results
      
    })
  }
  getPokemon(){
    
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`);
  }
  addToCarrito(pokemon:any){
    if(!this.carrito.find((i:any)=>i.name == pokemon.name)){
      this.carrito.push({
        name:pokemon.name
      })
    }
}
removePokes(Pokes:any){
 this.carrito = this.carrito.filter(p=>p.name != Pokes.name)
}
getCarrito(){
 
  return this.carrito
  
}
setPatron(unPatron:string){
  this.patron = unPatron
}
getPatron(){
  return this.patron
}

}
