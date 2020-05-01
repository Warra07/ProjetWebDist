import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = '/api/produit/produits';

  constructor(private http: HttpClient) { }

  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduit(produit: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, produit);
  }

  updateProduit(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, value);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProduitsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
