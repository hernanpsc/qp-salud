import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h2>Home Component</h2>
      <p>This is the home page content</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {}