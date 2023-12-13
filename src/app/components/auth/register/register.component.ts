import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector:    'app-register',
  standalone:  true,
  imports:     [CommonModule,ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl:    './register.component.css'
})
export class RegisterComponent {

  newUser:FormGroup;


  constructor(
    private formBuilder :FormBuilder,
    private fb          :FormBuilder
  ){
    
    this.newUser = this.fb.group({
      firtsName      :['',Validators.required],
      lastsName      :['',Validators.required],
      username       :['',Validators.required],
      email          :['',Validators.required],
      password       :['',Validators.required],
      confirmPassword:['',Validators.required],
    })
  }

  RegisterUser(){
    console.log(this.newUser.value);
  }

}
