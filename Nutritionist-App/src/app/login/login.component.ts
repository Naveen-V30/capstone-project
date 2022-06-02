import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {AuthenticationService} from 'src/app/service/authentication.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;

  constructor(private fb: FormBuilder,private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  loginForm:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  onLogin(){
    this.authService.login(this.loginForm.value).subscribe(res=>{
      console.log(res);
      this.loginForm.reset();
      
    },
    )
  }
}
