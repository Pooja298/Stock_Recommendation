import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private router: Router){ 
  };
  ngOnInit() {
  }
  forgetpass(){
    this.router.navigate(['/login']);
  }
  cancel(){
    this.router.navigate(['/home']);
  }
}
