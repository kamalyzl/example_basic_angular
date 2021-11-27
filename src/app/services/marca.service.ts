import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMarca } from '../interfaces/marca';
@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  list(path: string) {
    return this.http.get<IMarca[]>(this.apiBase + path);
  }
}
