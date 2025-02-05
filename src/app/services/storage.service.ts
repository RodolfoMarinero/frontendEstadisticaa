import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class StorageService {
  constructor() {}

  /** Guarda un valor en localStorage */
  save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /** Obtiene un valor de localStorage */
  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  /** Elimina un valor de localStorage */
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  /** Limpia todo el localStorage */
  clear(): void {
    localStorage.clear();
  }
}
