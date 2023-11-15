import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listenerCount } from 'process';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) {}


  list(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${environment.url_api}/empresa/`)
  }

  getOne(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(`${environment.url_api}/empresa/${id}/`)
  }

  create(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(`${environment.url_api}/empresa/`, empresa)
  }

  update(empresa: Empresa, id: number): Observable<Empresa>{
    return this.http.put<Empresa>(`${environment.url_api}/empresa/${id}/`, empresa)
  }

  delete(id: number): Observable<Empresa>{
    return this.http.delete(`${environment.url_api}/empresa/${id}/`)
  }
}
