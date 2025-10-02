import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ciao } from './ciao/ciao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Ciao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primo-progetto');
}
