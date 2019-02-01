import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root' //we declare that this service should be created by the root application injector.
})

export class ProfileService {

  private username: string;
  constructor(private http:HttpClient) { 
    console.log ("service is now ready!");
    this.username = 'kayitesijackie';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)

  }
}
