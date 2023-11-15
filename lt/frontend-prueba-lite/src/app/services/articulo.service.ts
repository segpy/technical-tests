import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';
import { Articulo } from '../models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  list(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(`${environment.url_api}/articulo`);
  }

  listByEmpresa(id: number): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(`${environment.url_api}/articulo/empresa/${id}`);
  }

  getOne(id: number): Observable<Articulo>{
    return this.http.get<Articulo>(`${environment.url_api}/articulo/${id}/`);
  }

  create(articulo: Articulo): Observable<Articulo>{
    return this.http.post<Articulo>(`${environment.url_api}/articulo/`, articulo);
  }

  update(articulo: Articulo, id: number): Observable<Articulo>{
    return this.http.put<Articulo>(`${environment.url_api}/articulo/${id}/`, articulo);
  }

  delete(id: number): Observable<Articulo>{
    return this.http.delete(`${environment.url_api}/articulo/${id}/`);
  }


}
