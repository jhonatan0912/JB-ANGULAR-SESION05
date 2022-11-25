import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  persona = { nombre: " ", apellido: " ", edad: 0 }
  personas = [
    { nombre: "Ignacio", apellido: "Casillas", edad: 21 }
  ];

  agregar() {
    this.personas.push(this.persona)
    this.persona = { nombre: " ", apellido: " ", edad: 0 }
  }

}
