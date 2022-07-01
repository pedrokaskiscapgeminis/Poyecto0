import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(pokemon: any[], lis:string): any[] {
    if(pokemon && pokemon.length){
    return (pokemon.filter(c => c.name.toLowerCase().includes(lis.toLowerCase())))
    }
      return pokemon
    }

}
