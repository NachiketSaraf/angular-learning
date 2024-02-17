import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
  }

  ngOnInit(): void {

  }
}

interface UserInfo {
  firstName: string;
  address: string;
}