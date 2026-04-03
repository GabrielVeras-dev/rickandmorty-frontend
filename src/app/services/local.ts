import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Local {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
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
export class LocalService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listarLocais(page: number = 1): Observable<ApiResponse<Local>> {
    return this.http.get<ApiResponse<Local>>(
      `${this.apiUrl}/locais?page=${page}`
    );
  }

  buscarPorId(id: number): Observable<Local> {
    return this.http.get<Local>(`${this.apiUrl}/locais/${id}`);
  }
}
