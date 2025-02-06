import { codigos } from './codigos';
import { ejemplos } from './ejemplos';
import { aplicaciones } from './aplicaciones';
import { formulas } from './formulas';
import { informaciones } from './informaciones';

export const informacion = {
  getInfo: (medida: string) => {
    return {
      medida: medida.charAt(0).toUpperCase() + medida.slice(1),
      informacion: informaciones[medida] || '',
      formula: formulas[medida] || '',
      codigo: codigos[medida] || '',
      ejemplo: ejemplos[medida] || '',
      aplicacion: aplicaciones[medida] || ''
    };
  }
};
