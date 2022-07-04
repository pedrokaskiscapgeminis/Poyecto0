import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comparador'
})
export class ComparadorPipe implements PipeTransform {

  transform(pokemon: any[]): any[] {
    if(!pokemon.find((i:any)=>i == pokemon)){
      
  }
  return pokemon
  }
}
