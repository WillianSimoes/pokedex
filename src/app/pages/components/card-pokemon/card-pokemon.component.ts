import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../services/pokemon-api.service';

@Component({
  selector: 'app-card-pokemon',
  standalone: false,

  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent implements OnInit {
  pokemons: any[] = [];
  //pokemonDetails: any[] = [];

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonApiService.getPokemons().subscribe(response => {
      const pokemons = response.results;
      this.pokemonApiService.getAllPokemonDetails(pokemons).subscribe(details => {
        this.pokemons = details.map(pokemon => ({
          name: pokemon.name,
          image: pokemon.sprites?.other?.['official-artwork']?.front_default || null,
          types: pokemon.types.map((type: any) => type.type.name) //tipos de pokemons
        }));
      });
    });
  }
}
