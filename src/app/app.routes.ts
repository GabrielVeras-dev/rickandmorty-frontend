import { Routes } from '@angular/router';
import { PersonagemListaComponent } from './components/personagem-lista/personagem-lista.component';
import { LocalListaComponent } from './components/local-lista/local-lista.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: 'personagens', component: PersonagemListaComponent },
  { path: 'locais', component: LocalListaComponent },
];
