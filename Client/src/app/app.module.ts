import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SectorComponent } from './sector/sector.component';
import { HomeComponent } from './home/home.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'signUp', component:SignUpComponent},
  { path:'sector',component:SectorComponent},
  { path:'home',component:HomeComponent},
  { path:'forgetpass',component: ForgetpassComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SectorComponent,
    HomeComponent,
    ForgetpassComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
