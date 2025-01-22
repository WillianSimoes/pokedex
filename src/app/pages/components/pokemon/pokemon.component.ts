import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../services/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: false,

  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.searchPokemon(name);
    }
  }

  searchPokemon(name: string): void {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    this.pokemonApiService.getPokemonDetails(url).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Pokémon não encontrado ou erro ao buscar.';
      },
    });
  }


}
