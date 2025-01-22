import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any>{
    return this.http.get<any>(this.apiUrl+"?limit=2000");
  }

  getPokemonDetails(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl).pipe(
      map(pokemon => {
        return pokemon;
      })
    );
  }

  getAllPokemonDetails(pokemons: any[]): Observable<any[]> {
    const detailsRequests = pokemons.map(pokemon =>
      this.getPokemonDetails(pokemon.url)
    );
    return forkJoin(detailsRequests);
  }
}
