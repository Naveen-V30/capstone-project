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

  constructor(private formBuilder: FormBuilder,private authentication: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm:FormGroup = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  onLogin(){
    this.authentication.getuser()
    .subscribe({
      next:res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login success!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("Please sign up before login!!");
      }
    },error:()=>{
      alert("Something went wrong!!")
    }
    }) 
     
    }
    
  
}
