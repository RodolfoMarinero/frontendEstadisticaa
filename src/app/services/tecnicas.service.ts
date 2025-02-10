import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIURL } from '../../ENVIROMENT';

@Injectable({
  providedIn: 'root'
})
export class TecnicasService {

  constructor(private http: HttpClient) { }

  getPermutacion(n: number, r: number): Observable<number> {
    const params = new HttpParams()
      .set('n', n.toString())
      .set('r', r.toString());
    return this.http.get<number>(`${APIURL}/permutacion`, { params });
  }
  getCombinatoria(n: number, r: number): Observable<number> {
    const params = new HttpParams()
      .set('n', n.toString())
      .set('r', r.toString());
    return this.http.get<number>(`${APIURL}/combinatoria`, { params });
  }
}
