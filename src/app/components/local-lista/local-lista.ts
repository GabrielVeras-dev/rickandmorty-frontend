import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LocalService, Local, ApiResponse } from '../../services/local';

@Component({
  selector: 'app-local-lista',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './local-lista.html',
  styleUrl: './local-lista.css',
})
export class LocalLista implements OnInit {

  locais: Local[] = [];
  info: any = null;
  paginaAtual = 1;
  carregando = false;

  constructor(private localService: LocalService) {}

  ngOnInit(): void {
    this.carregarLocais();
  }

  carregarLocais(): void {
    this.carregando = true;
    this.localService.listarLocais(this.paginaAtual).subscribe({
      next: (res) => {
        this.locais = res.results;
        this.info = res.info;
        this.carregando = false;
      },
      error: () => { this.carregando = false; }
    });
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.carregarLocais();
  }

  getPaginas(): number[] {
    if (!this.info) return [];
    const total = this.info.pages;
    const atual = this.paginaAtual;
    const paginas: number[] = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) paginas.push(i);
    } else {
      paginas.push(1);
      if (atual > 3) paginas.push(-1);
      for (let i = Math.max(2, atual - 1); i <= Math.min(total - 1, atual + 1); i++) {
        paginas.push(i);
      }
      if (atual < total - 2) paginas.push(-1);
      paginas.push(total);
    }
    return paginas;
  }
}
