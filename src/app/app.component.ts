import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoangular';

  persona = { nombre: " ", edad: 0 };
  personas = [
    { nombre: 'Alexander', edad: 28 }
  ];

  agregar() {
    this.personas.push(this.persona);
    this.persona = { nombre: " ", edad: 0 }
  }
}