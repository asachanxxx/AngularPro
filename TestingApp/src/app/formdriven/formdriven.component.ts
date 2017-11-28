import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formdriven',
  templateUrl: './formdriven.component.html',
  styleUrls: ['./formdriven.component.css']
})
export class FormdrivenComponent implements OnInit {

   langs:string[] = [
    "English","French","Sinhala"
  ]

  myform = new FormGroup({
    name: new FormGroup({ 
        firstName: new FormControl(), 
        lastName: new FormControl(),
    }),
    email: new FormControl(),
    password: new FormControl(),
    language: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
