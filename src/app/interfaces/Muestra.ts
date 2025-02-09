export interface Muestra {
    id: number;
    nombre:string;
    datos: number[];
    file?: File;
  }
  export interface MedidasAsociacion {
    correlacion: number;
    covarianza: number;
    coeficienteCorrelacion: number;
  }
  export interface MedidasDescriptivas{
    media: number ;
    mediana: number ;
    moda: number[] ;
    desviacionEstandar: number ;
    varianza: number;
  }