export const formulas: Record<string, string> = {
  media: '\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}',
  mediana: `
    \\text{Mediana} =
    \\begin{cases}
      x_{(n+1)/2} & \\text{si } n \\text{ es impar} \\\\
      \\frac{x_{n/2} + x_{(n/2)+1}}{2} & \\text{si } n \\text{ es par}
    \\end{cases}
  `,
  moda: '\\text{Moda} = \\text{valor más frecuente}',
  varianza: '\\sigma^2 = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}',
  desviacionEstandar: '\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}',
  covarianza: '\\text{Cov}(X, Y) = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{n}',
  correlacion: '\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}',
  coeficienteCorrelacion: '\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}',
  permutaciones: 'P(n, r) = \\frac{n!}{(n-r)!}',
  combinaciones: 'C(n, r) = \\frac{n!}{r!(n-r)!}'
};
