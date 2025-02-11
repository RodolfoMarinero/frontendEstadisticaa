export const codigos: Record<string, string> = {
  media: `
public double calcularMedia(List<Double> data) {
        return data.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
    }`,
  mediana: `
public double calcularMediana(List<Double> data) {
        List<Double> sorted = data.stream().sorted().collect(Collectors.toList());
        int size = sorted.size();
        if (size % 2 == 0) {
            return (sorted.get(size / 2 - 1) + sorted.get(size / 2)) / 2.0;
        } else {
            return sorted.get(size / 2);
        }
    }`,
  moda: `
public List<Double> calcularModa(List<Double> data) {
        Map<Double, Long> frequency = data.stream()
                .collect(Collectors.groupingBy(e -> e, Collectors.counting()));
        if (frequency.isEmpty()) {
            return List.of(-1.0);
        }
        if (frequency.values().stream().distinct().count() == 1) {
            return List.of(-1.0);
        }
        long maxCount = Collections.max(frequency.values());
        return frequency.entrySet().stream()
                .filter(entry -> entry.getValue() == maxCount)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }`,
  varianza: `
public double calcularVarianza(List<Double> data) {
        double mean = calcularMedia(data);
        return data.stream()
                .mapToDouble(x -> Math.pow(x - mean, 2))
                .average()
                .orElse(0.0);
    }`,
  desviacionEstandar: `
public double calcularDesviacionEstandar(List<Double> data) {
        double mean = calcularMedia(data);
        double variance = data.stream()
                .mapToDouble(x -> Math.pow(x - mean, 2))
                .average()
                .orElse(0.0);
        return Math.sqrt(variance);
    }`,
  covarianza: `
  public double calcularCovarianza(List<Double> data1, List<Double> data2) {
        if (data1.size() != data2.size() || data1.isEmpty()) {
            throw new IllegalArgumentException("Las listas deben tener el mismo tamaño y no estar vacías");
        }
        double mediaX = calcularMedia(data1);
        double mediaY = calcularMedia(data2);
        return IntStream.range(0, data1.size())
                .mapToDouble(i -> (data1.get(i) - mediaX) * (data2.get(i) - mediaY))
                .average()
                .orElse(0.0);
    }`,
  correlacion: `
  public double calcularCorrelacion(List<Double> data1, List<Double> data2) {
        double covarianza = calcularCovarianza(data1, data2);
        double desviacionX = calcularDesviacionEstandar(data1);
        double desviacionY = calcularDesviacionEstandar(data2);
        return (desviacionX == 0 || desviacionY == 0) ? 0 : covarianza / (desviacionX * desviacionY);
    }`,
  coeficienteCorrelacion:`
  public double calcularCoeficienteCorrelacion(List<Double> data1, List<Double> data2) {
        if (data1 == null || data2 == null || data1.size() != data2.size() || data1.isEmpty()) {
            throw new IllegalArgumentException("Las listas deben tener el mismo tamaño y no pueden estar vacías.");
        }

        double covarianza = calcularCovarianza(data1, data2);
        double desviacionEstandarData1 = calcularDesviacionEstandar(data1);
        double desviacionEstandarData2 = calcularDesviacionEstandar(data2);

        if (desviacionEstandarData1 == 0 || desviacionEstandarData2 == 0) {
            throw new ArithmeticException("No se puede calcular el coeficiente de correlación con una desviación estándar de 0.");
        }

        return covarianza / (desviacionEstandarData1 * desviacionEstandarData2);
    }`,
  permutaciones:`
  public long calcularPermutacion(int n, int r) {
        return factorial(n) / factorial(n - r);
    }`,
  combinaciones:`
  public long calcularCombinatoria(int n, int r) {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }`
  }
