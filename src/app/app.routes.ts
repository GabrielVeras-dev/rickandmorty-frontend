import { Routes } from '@angular/router';
import { PersonagemLista } from './components/personagem-lista/personagem-lista';
import { LocalLista } from './components/local-lista/local-lista';
import { Sobre } from './components/sobre/sobre';

export const routes: Routes = [
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: 'personagens', component: PersonagemLista },
  { path: 'locais', component: LocalLista },
  { path: 'sobre', component: Sobre },
];
