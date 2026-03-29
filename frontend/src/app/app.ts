import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Kontrollera att det står 'partials' här nu!
import { Header } from './components/partials/header/header'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Header], // Header måste ligga här
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend'); 
}