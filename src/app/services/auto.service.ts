import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAuto } from '../interfaces/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  list(path: string) {
    return this.http.get<IAuto[]>(this.apiBase + path);
  }

  create(bean: IAuto, path: string) {
    return this.http.post(this.apiBase + path, bean);
  }
}
