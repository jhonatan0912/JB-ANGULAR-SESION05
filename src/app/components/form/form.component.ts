import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nameArr: any = []
  lastNameArr: any = []
  ageArr: any = []

  constructor() {

  }

  sendUser(name: HTMLInputElement, lastName: HTMLInputElement, age: HTMLInputElement) {

    this.nameArr.push(name.value);
    this.lastNameArr.push(lastName.value);
    this.ageArr.push(age.value);

  }

  ngOnInit(): void {
  }

}
