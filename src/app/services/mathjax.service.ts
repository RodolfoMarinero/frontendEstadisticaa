import { Injectable } from '@angular/core';


declare global {
  interface Window {
    MathJax: any;
  }
}
@Injectable({
  providedIn: 'root'
})
export class MathjaxService {
  constructor() {
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']]
        },
        svg: {
          fontCache: 'global'
        }
      };
    }
  }

  renderMath() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}