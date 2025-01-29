import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToPortada(): void {
    this.router.navigateByUrl('/portada', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/portada']);
    });
  }
}
