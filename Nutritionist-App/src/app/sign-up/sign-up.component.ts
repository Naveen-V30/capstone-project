import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from 'src/app/service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide:boolean = true;

  constructor(private formbuilder:FormBuilder,private authentication:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
    signupForm:FormGroup = this.formbuilder.group({
      name : ['',[Validators.required]],
      email :['',[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.minLength(7)]]
    })
  
  onSignup(){
    if(this.signupForm.valid){
      this.authentication.postuser(this.signupForm.value)
      .subscribe({
        next:(res)=>{
          alert("Signup success!!");
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        error:()=>{
          alert("Error while signing up!!")
        }
      })
    }
  }

}
