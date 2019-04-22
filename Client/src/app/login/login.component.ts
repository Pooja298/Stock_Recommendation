import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){ 
  };
  title = 'login Page';
  ngOnInit() {
    
  }
   SuccessLogin()
   {
    this.router.navigate(['/sector']);
  
    
   }
   forgetpass(){
    this.router.navigate(['/forgetpass']);
   }
   cancel(){
    this.router.navigate(['/home']);
  }
}




