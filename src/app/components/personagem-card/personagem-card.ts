import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personagem } from '../../services/personagem';

@Component({
  selector: 'app-personagem-card',
  imports: [CommonModule],
  templateUrl: './personagem-card.html',
  styleUrl: './personagem-card.css',
})
export class PersonagemCard {
  @Input() personagem!: Personagem;
  @Input() selecionado = false;

  getStatusColor(): string {
    switch (this.personagem.status.toLowerCase()) {
      case 'alive': return '#4ade80';
      case 'dead': return '#f87171';
      default: return '#94a3b8';
    }
  }
}
