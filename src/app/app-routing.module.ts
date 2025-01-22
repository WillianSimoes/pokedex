import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home/home.component';
import { ListaPokemonsComponent } from './pages/components/lista-pokemons/lista-pokemons.component';
import { PokemonComponent } from './pages/components/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista-pokemons', component: ListaPokemonsComponent },
  { path: 'pokemon/:name', component: PokemonComponent },
  { path: 'pokemon', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
