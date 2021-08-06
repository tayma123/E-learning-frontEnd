import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
   user:User;
   erreur=0;
  ngOnInit(): void {
  }
  onLoggedin(){
    this.authService.getUserFromDB()
  }
}
