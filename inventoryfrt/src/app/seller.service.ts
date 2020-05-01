import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  private baseUrl = '/api/vendeur/vendeurs';
  private httpOptions : any    = {
    headers: new HttpHeaders({

      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getSeller(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSeller(seller: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, seller);
  }

  updateSeller(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, value);
  }

  deleteSeller(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSellersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.httpOptions);
  }
}
