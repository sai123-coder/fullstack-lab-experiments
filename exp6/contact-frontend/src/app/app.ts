import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './app.html'
})
export class App {}