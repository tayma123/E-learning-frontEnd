import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host=environment.host;
  constructor() { }





  getUserFromDB(){
    const url=`${this.host}/login`;
     

  }
}
