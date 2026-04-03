import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Interfaces que representam os dados retornados pela API
export interface Origem {
  name: string;
  url: string;
}

export interface Personagem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origem;
  location: Origem;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiResponse<T> {
  info: Info;
  results: T[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Lista personagens com paginacao
  listarPersonagens(page: number = 1): Observable<ApiResponse<Personagem>> {
    return this.http.get<ApiResponse<Personagem>>(
      `${this.apiUrl}/personagens?page=${page}`
    );
  }

  // Busca personagem por ID
  buscarPorId(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.apiUrl}/personagens/${id}`);
  }

  // Busca personagens por nome
  buscarPorNome(nome: string): Observable<ApiResponse<Personagem>> {
    return this.http.get<ApiResponse<Personagem>>(
      `${this.apiUrl}/personagens/buscar?nome=${nome}`
    );
  }

  // Filtra personagens por status
  filtrarPorStatus(status: string, page: number = 1): Observable<ApiResponse<Personagem>> {
    return this.http.get<ApiResponse<Personagem>>(
      `${this.apiUrl}/personagens/filtrar?status=${status}&page=${page}`
    );
  }
}
