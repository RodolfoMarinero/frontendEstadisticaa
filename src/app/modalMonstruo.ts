/*import { Injectable } from '@angular/core';
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
          informacion: 'La media es una medida estadística que se utiliza para obtener el valor central de un conjunto de datos numéricos.Para calcular la media, se suman todos los valores y se dividen entre la cantidad de elementos en el conjunto de datos.La media es útil para entender el comportamiento general de un conjunto de datos y para hacer comparaciones con otros conjuntos de datos.Por ejemplo, si se quiere saber la edad promedio de un grupo de personas, se puede calcular la media de las edades de todas las personas del grupo.',
          formula: '\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}',
          codigo: `
public class MediaCalculator {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(2, 3, 5);
    double media = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    System.out.println("La media es: " + media);
  }
}`,
          ejemplo: 'data:image/jpeg;base64,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',
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
          ejemplo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FgK1xSApIpFGhJQz6C2nNr9_TUUSmLEJAg&s',
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
*/
