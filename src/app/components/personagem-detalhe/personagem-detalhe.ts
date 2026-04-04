import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personagem } from '../../services/personagem';

@Component({
  selector: 'app-personagem-detalhe',
  imports: [CommonModule],
  templateUrl: './personagem-detalhe.html',
  styleUrl: './personagem-detalhe.css',
})
export class PersonagemDetalhe {
  @Input() personagem!: Personagem;

  getStatusColor(): string {
    switch (this.personagem.status.toLowerCase()) {
      case 'alive': return '#4ade80';
      case 'dead': return '#f87171';
      default: return '#94a3b8';
    }
  }

  getStatusBg(): string {
    switch (this.personagem.status.toLowerCase()) {
      case 'alive': return '#052e16';
      case 'dead': return '#2e0505';
      default: return '#1a1a2e';
    }
  }
}
