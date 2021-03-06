import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pok:any
  private patron:string = ""
  private detalles:any
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
  Detalles(name:string){
    console.log(name)
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + name)
  }
  SetDetalles(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
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
