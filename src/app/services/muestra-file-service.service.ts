import { Injectable } from '@angular/core';
import { Muestra } from '../interfaces/Muestra';

@Injectable({
  providedIn: 'root'
})
export class MuestraFileService {
  private readonly filePrefix = 'muestra_file_';

  constructor() {}

  public async saveMuestraFile(muestra: Muestra): Promise<string> {
    if (!muestra.file) {
      return Promise.reject('No se ha proporcionado un archivo.');
    }
    const fileKey = `${this.filePrefix}${muestra.id}`;
    const base64 = await this.convertFileToBase64(muestra.file);
    const fileData = {
      base64,
      name: muestra.file!.name,
      type: muestra.file!.type,
      lastModified: muestra.file!.lastModified
    };
    localStorage.setItem(fileKey, JSON.stringify(fileData));
    return fileKey;
  }

  public getMuestraFile(muestra: Muestra): Promise<Muestra> {
    const fileKey = `${this.filePrefix}${muestra.id}`;
    const fileDataString = localStorage.getItem(fileKey);
    if (fileDataString) {
      try {
        const fileData = JSON.parse(fileDataString);
        const file = this.base64ToFile(fileData.base64, fileData.name, fileData.type);
        muestra.file = file;
      } catch (error) {
        console.error('Error al parsear los datos del archivo:', error);
      }
    }
    return Promise.resolve(muestra);
  }

  public removeMuestraFile(muestra: Muestra): void {
    const fileKey = `${this.filePrefix}${muestra.id}`;
    localStorage.removeItem(fileKey);
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  private base64ToFile(base64: string, fileName: string, fileType: string): File {
    const arr = base64.split(',');
    const bstr = atob(arr[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }
    return new File([u8arr], fileName, { type: fileType });
  }
}
