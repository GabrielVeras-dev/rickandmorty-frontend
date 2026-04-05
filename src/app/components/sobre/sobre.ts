import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  expiracao = new Date('2026-05-04');
  hoje = new Date();
  diasRestantes = Math.ceil(
    (this.expiracao.getTime() - this.hoje.getTime()) / (1000 * 60 * 60 * 24)
  );
  saibaMais = false;

  toggleSaibaMais(): void {
    this.saibaMais = !this.saibaMais;
  }
}
