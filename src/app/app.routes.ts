import { Routes } from '@angular/router';
import { PersonagemLista } from './components/personagem-lista/personagem-lista';
import { LocalLista } from './components/local-lista/local-lista';

export const routes: Routes = [
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: 'personagens', component: PersonagemLista },
  { path: 'locais', component: LocalLista },
];
