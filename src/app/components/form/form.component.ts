import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: any=""
  lastName: any=""
  age: any=""
  data: any = []
  constructor() {

  }

  sendUser(name: HTMLInputElement, lastName: HTMLInputElement, age: HTMLInputElement) {

    this.data.push(name.value);
    this.data.push(lastName.value);
    this.data.push(age.value);
    console.log(this.data[2]);

  }

  ngOnInit(): void {
  }

}
