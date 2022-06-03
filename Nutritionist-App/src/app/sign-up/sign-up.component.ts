import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {AuthenticationService} from 'src/app/service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide:boolean = true;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
    signupForm:FormGroup = this.formbuilder.group({
      name : ['',[Validators.required]],
      email :['',[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.minLength(7)]]
    })
  
  onSignup(){
    console.log(this.signupForm.value);
  }

}
