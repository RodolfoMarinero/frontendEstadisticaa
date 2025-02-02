import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from '../pantallas/detalles/detalles.component';
import { Informacion } from '../interfaces/Informacion';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog:MatDialog) { }
  abrirModal(medida:string) {
    const dialogRef = this.dialog.open(DetallesComponent, {
      minWidth:'900px',
      panelClass: 'pantalla-detalles',  // Clase personalizada para este diálogo
      data:{info:this.getInfo(medida)}
    });
  }
  cerrarModal() {
    this.dialog.closeAll();
  }
  private getInfo(medida: string): Informacion {
    switch (medida.toLowerCase()) {
      case 'media':
        return {
          medida: 'Media',
          informacion: 'Es el promedio de los datos de una muestra o población. Se utiliza para representar un valor central de un conjunto de datos.',
          formula: '\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}',
          codigo: `
public class MediaCalculator {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(2, 3, 5);
    double media = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    System.out.println("La media es: " + media);
  }
}`,
          ejemplo: 'Si los datos son 2, 3, 5, la media es (2+3+5)/3 = 3.33',
          aplicacion: 'Se usa en estadísticas descriptivas para resumir datos.'
        };
      case 'mediana':
        return {
          medida: 'Mediana',
          informacion: 'Es el valor que separa la mitad superior de la mitad inferior de un conjunto de datos. Es menos sensible a valores extremos que la media.',
          formula: 'Mediana = \\begin{cases} x_{(n+1)/2} & \\text{si } n \\text{ es impar} \\\\ \\frac{x_{n/2} + x_{(n/2)+1}}{2} & \\text{si } n \\text{ es par} \\end{cases}',
          codigo: `
public class MedianaCalculator {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 3, 3, 6, 7, 8, 9);
    Collections.sort(numbers);
    double mediana;
    if (numbers.size() % 2 == 0) {
      mediana = (numbers.get(numbers.size()/2 - 1) + numbers.get(numbers.size()/2)) / 2.0;
    } else {
      mediana = numbers.get(numbers.size()/2);
    }
    System.out.println("La mediana es: " + mediana);
  }
}`,
          ejemplo: 'Si los datos son 1, 3, 3, 6, 7, 8, 9, la mediana es 6.',
          aplicacion: 'Se usa para describir la tendencia central de datos sesgados o con valores atípicos.'
        };
      case 'moda':
        return {
          medida: 'Moda',
          informacion: 'Es el valor que aparece con mayor frecuencia en un conjunto de datos. Puede haber más de una moda.',
          formula: 'Moda = \\text{valor más frecuente}',
          codigo: `
public class ModaCalculator {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4);
    Map<Integer, Long> frequencyMap = numbers.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    long maxFrequency = Collections.max(frequencyMap.values());
    List<Integer> moda = frequencyMap.entrySet().stream().filter(entry -> entry.getValue() == maxFrequency).map(Map.Entry::getKey).collect(Collectors.toList());
    System.out.println("La moda es: " + moda);
  }
}`,
          ejemplo: 'Si los datos son 1, 2, 2, 3, 4, la moda es 2.',
          aplicacion: 'Se usa en análisis de datos categóricos.'
        };
      case 'varianza':
        return {
          medida: 'Varianza',
          informacion: 'Es una medida de la dispersión de los datos con respecto a la media. Indica cuánto varían los datos entre sí.',
          formula: '\\sigma^2 = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}',
          codigo: `
public class VarianzaCalculator {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(2, 4, 4, 4, 5, 5, 7, 9);
    double media = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double varianza = numbers.stream().mapToDouble(num -> Math.pow(num - media, 2)).average().orElse(0.0);
    System.out.println("La varianza es: " + varianza);
  }
}`,
          ejemplo: 'Si los datos son 2, 4, 4, 4, 5, 5, 7, 9, la varianza es 4.',
          aplicacion: 'Se usa en estadísticas inferenciales y para calcular la desviación estándar.'
        };
      case 'desviacion estandar':
        return {
          medida: 'Desviación Estándar',
          informacion: 'Es una medida de la dispersión de un conjunto de datos con respecto a su media. Indica cuánto se desvían los datos en promedio de la media.',
          formula: '\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}',
          codigo: `
public class DesviacionEstandarCalculator {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(2, 4, 4, 4, 5, 5, 7, 9);
    double media = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double varianza = numbers.stream().mapToDouble(num -> Math.pow(num - media, 2)).average().orElse(0.0);
    double desviacionEstandar = Math.sqrt(varianza);
    System.out.println("La desviación estándar es: " + desviacionEstandar);
  }
}`,
          ejemplo: 'Si los datos son 2, 4, 4, 4, 5, 5, 7, 9, la desviación estándar es 2.',
          aplicacion: 'Se usa para entender la dispersión de los datos en relación a la media.'
        };
      case 'covarianza':
        return {
          medida: 'Covarianza',
          informacion: 'Es una medida de la relación entre dos variables aleatorias. Indica si las variables tienden a aumentar o disminuir juntas.',
          formula: '\\text{Cov}(X, Y) = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{n}',
          codigo: `
public class CovarianzaCalculator {
  public static void main(String[] args) {
    List<Integer> x = Arrays.asList(2, 4, 6);
    List<Integer> y = Arrays.asList(3, 5, 7);
    double mediaX = x.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double mediaY = y.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double covarianza = 0.0;
    for (int i = 0; i < x.size(); i++) {
      covarianza += (x.get(i) - mediaX) * (y.get(i) - mediaY);
    }
    covarianza /= x.size();
    System.out.println("La covarianza es: " + covarianza);
  }
}`,
          ejemplo: 'Si los datos son (2,3), (4,5), (6,7), la covarianza es positiva.',
          aplicacion: 'Se usa para determinar la relación entre dos variables en estadísticas multivariadas.'
        };
      case 'correlacion':
        return {
          medida: 'Correlación',
          informacion: 'Es una medida de la fuerza y dirección de la relación lineal entre dos variables.',
          formula: '\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}',
          codigo: `
public class CorrelacionCalculator {
  public static void main(String[] args) {
    List<Integer> x = Arrays.asList(2, 4, 6);
    List<Integer> y = Arrays.asList(3, 5, 7);
    double mediaX = x.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double mediaY = y.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double covarianza = 0.0;
    for (int i = 0; i < x.size(); i++) {
      covarianza += (x.get(i) - mediaX) * (y.get(i) - mediaY);
    }
    covarianza /= x.size();
    double desviacionX = Math.sqrt(x.stream().mapToDouble(num -> Math.pow(num - mediaX, 2)).average().orElse(0.0));
    double desviacionY = Math.sqrt(y.stream().mapToDouble(num -> Math.pow(num - mediaY, 2)).average().orElse(0.0));
    double correlacion = covarianza / (desviacionX * desviacionY);
    System.out.println("La correlación es: " + correlacion);
  }
}`,
          ejemplo: 'Si la correlación entre altura y peso es 0.8, indica una fuerte relación positiva.',
          aplicacion: 'Se usa para evaluar la relación lineal entre variables en análisis de regresión.'
        };
      case 'coeficientecorrelacion':
        return {
          medida: 'Coeficiente de Correlación',
          informacion: 'Es una medida que cuantifica la relación entre dos variables.',
          formula: '\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}',
          codigo: `
public class CoeficienteCorrelacionCalculator {
  public static void main(String[] args) {
    List<Integer> x = Arrays.asList(2, 4, 6);
    List<Integer> y = Arrays.asList(3, 5, 7);
    double mediaX = x.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double mediaY = y.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    double covarianza = 0.0;
    for (int i = 0; i < x.size(); i++) {
      covarianza += (x.get(i) - mediaX) * (y.get(i) - mediaY);
    }
    covarianza /= x.size();
    double desviacionX = Math.sqrt(x.stream().mapToDouble(num -> Math.pow(num - mediaX, 2)).average().orElse(0.0));
    double desviacionY = Math.sqrt(y.stream().mapToDouble(num -> Math.pow(num - mediaY, 2)).average().orElse(0.0));
    double coeficienteCorrelacion = covarianza / (desviacionX * desviacionY);
    System.out.println("El coeficiente de correlación es: " + coeficienteCorrelacion);
  }
}`,
          ejemplo: 'Si el coeficiente de correlación entre altura y peso es 0.8, indica una fuerte relación positiva.',
          aplicacion: 'Se usa para evaluar la relación lineal entre variables en análisis de regresión.'
        };
      default:
        return {
          medida: 'Desconocida',
          informacion: 'Medida no reconocida',
          formula: '',
          codigo: '',
          ejemplo: '',
          aplicacion: ''
        };
    }
  }
}
