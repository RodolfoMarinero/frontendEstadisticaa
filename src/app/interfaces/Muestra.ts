export interface Muestra {
    id: number;
    nombre:string;
    data: number[];
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