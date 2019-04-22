import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  constructor(private router: Router){ 
    };
  title = 'Sector Based Trade Recommendation System ';

  login(){
    
    this.router.navigate(['/login']);
  }
  signUp(){
    
    this.router.navigate(['/signUp']);
  }
  home(){
    
    this.router.navigate(['/home']);
  }

}
