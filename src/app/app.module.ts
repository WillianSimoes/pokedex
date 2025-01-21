import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './pages/main/body/body.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { NavbarComponent } from './pages/main/navbar/navbar.component';
import { ListaPokemonsComponent } from './pages/components/lista-pokemons/lista-pokemons.component';
import { PokemonComponent } from './pages/components/pokemon/pokemon.component';
import { HomeComponent } from './pages/main/home/home.component';
import { CardPokemonComponent } from './pages/components/card-pokemon/card-pokemon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    ListaPokemonsComponent,
    PokemonComponent,
    HomeComponent,
    CardPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
