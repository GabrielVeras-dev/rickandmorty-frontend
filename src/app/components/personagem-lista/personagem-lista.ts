import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PersonagemService, Personagem, ApiResponse } from '../../services/personagem';
import { PersonagemCard } from '../personagem-card/personagem-card';
import { PersonagemDetalhe } from '../personagem-detalhe/personagem-detalhe';

@Component({
  selector: 'app-personagem-lista',
  imports: [CommonModule, FormsModule, MatProgressSpinnerModule, PersonagemCard, PersonagemDetalhe],
  templateUrl: './personagem-lista.html',
  styleUrl: './personagem-lista.css',
})
export class PersonagemLista implements OnInit {

  personagens: Personagem[] = [];
  personagemSelecionado: Personagem | null = null;
  indicesSelecionado: number = -1;
  info: any = null;
  paginaAtual = 1;
  carregando = false;
  termoBusca = '';
  statusFiltro = '';
  buscaTimeout: any;
  colunas = 5;

  constructor(private personagemService: PersonagemService) {}

  ngOnInit(): void {
    this.carregarPersonagens();
  }

  carregarPersonagens(): void {
    this.carregando = true;
    this.personagemService.listarPersonagens(this.paginaAtual).subscribe({
      next: (res: any) => {
        this.personagens = res.results;
        this.info = res.info;
        this.carregando = false;
      },
      error: () => { this.carregando = false; }
    });
  }

  onBusca(): void {
    clearTimeout(this.buscaTimeout);
    this.buscaTimeout = setTimeout(() => {
      if (this.termoBusca.trim()) {
        this.carregando = true;
        this.statusFiltro = '';
        this.paginaAtual = 1;
        this.personagemSelecionado = null;
        this.personagemService.buscarPorNome(this.termoBusca).subscribe({
          next: (res: any) => {
            this.personagens = res.results;
            this.info = res.info;
            this.carregando = false;
          },
          error: () => {
            this.personagens = [];
            this.carregando = false;
          }
        });
      } else {
        this.paginaAtual = 1;
        this.personagemSelecionado = null;
        this.carregarPersonagens();
      }
    }, 500);
  }

  filtrarStatus(status: string): void {
    this.statusFiltro = status;
    this.termoBusca = '';
    this.paginaAtual = 1;
    this.personagemSelecionado = null;
    if (!status) {
      this.carregarPersonagens();
      return;
    }
    this.carregando = true;
    this.personagemService.filtrarPorStatus(status, 1).subscribe({
      next: (res: any) => {
        this.personagens = res.results;
        this.info = res.info;
        this.carregando = false;
      },
      error: () => {
        this.personagens = [];
        this.carregando = false;
      }
    });
  }

  mudarPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.personagemSelecionado = null;
    this.indicesSelecionado = -1;
    if (this.statusFiltro) {
      this.carregando = true;
      this.personagemService.filtrarPorStatus(this.statusFiltro, pagina).subscribe({
        next: (res: any) => {
          this.personagens = res.results;
          this.info = res.info;
          this.carregando = false;
        },
        error: () => { this.carregando = false; }
      });
    } else {
      this.carregarPersonagens();
    }
  }

  selecionarPersonagem(personagem: Personagem, indice: number): void {
    if (this.personagemSelecionado?.id === personagem.id) {
      this.personagemSelecionado = null;
      this.indicesSelecionado = -1;
    } else {
      this.personagemSelecionado = personagem;
      this.indicesSelecionado = indice;
    }
  }

  // Verifica se deve exibir o detalhe após este índice
  // Exibe no final da linha do card selecionado
  deveExibirDetalhe(indice: number): boolean {
    if (!this.personagemSelecionado || this.indicesSelecionado === -1) return false;
    const linhaDoSelecionado = Math.floor(this.indicesSelecionado / this.colunas);
    const linhaAtual = Math.floor(indice / this.colunas);
    const ultimoDaLinha = (indice + 1) % this.colunas === 0 || indice === this.personagens.length - 1;
    return linhaAtual === linhaDoSelecionado && ultimoDaLinha;
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
