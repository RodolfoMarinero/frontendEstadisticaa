import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../ENVIROMENT';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemplosService {

  constructor(private http:HttpClient) { }

  getDatosDeEjemplo():Observable<number[]>{
    return this.http.get<number[]>(APIURL+"/ejemplo");
  }
}
