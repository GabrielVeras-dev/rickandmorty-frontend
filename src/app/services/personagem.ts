import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

  listarPersonagens(page: number = 1): Observable<ApiResponse<Personagem>> {
    return this.http.get<ApiResponse<Personagem>>(
      `${this.apiUrl}/personagens?page=${page}`
    );
  }

  buscarPorId(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.apiUrl}/personagens/${id}`);
  }

  buscarPorNome(nome: string): Observable<ApiResponse<Personagem>> {
    return this.http.get<ApiResponse<Personagem>>(
      `${this.apiUrl}/personagens/buscar?nome=${nome}`
    );
  }

  filtrarPorStatus(status: string, page: number = 1): Observable<ApiResponse<Personagem>> {
    return this.http.get<ApiResponse<Personagem>>(
      `${this.apiUrl}/personagens/filtrar?status=${status}&page=${page}`
    );
  }
}
