import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {AuthenticationService} from 'src/app/service/authentication.service'
import {Router} from '@angular/router';
import { JwtClientService } from '../service/jwt-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;

  constructor(private formBuilder: FormBuilder,private authentication: AuthenticationService,private router:Router,private jwtservice: JwtClientService) { }

  ngOnInit(): void {
  }
  loginForm:FormGroup = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  onLogin() {
    this.jwtservice.generatetoken(this.loginForm.value)
      .subscribe({
        next: (res) => {
          alert("Login success!!");
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        }, error: () => {
          alert("Password/email id mismatch!!");
        }
      })
  }
     
 }
    
  

