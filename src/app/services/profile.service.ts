import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Repo} from '../repo';



@Injectable({
  providedIn: 'root' //we declare that this service should be created by the root application injector.
})

export class ProfileService {
  repo: Repo; 
  user: User;
  
  private username: string;
  items;
constructor(private http: HttpClient) {
  this.user = new User ('  ',' ', 0, new Date, ' ',0,0);
  this.repo = new Repo (' ', ' ', ' ', ' ', ' ', ' ', new Date);
}
 getProfileInfo(username) {
  interface ApiResponse {
      
      login: string;
      public_repos: number;
      html_url: string;
      followers: number;
      following: number;
      avatar_url: string;
      dateCount: Date;
}
const promise = new Promise((resolve, reject) => {

  this.http.get<ApiResponse>("https://api.github.com/users/"+ username + "?access_token=4e506891c065d69bf641bbe51727e32d407658e2").toPromise().then(profile => {
      
      this.user.login = profile.login;
      this.user.public_repos = profile.public_repos;
      this.user.html_url = profile.html_url;
      this.user.followers = profile.followers;
        this.user.following = profile.following;
      this.user.avatar_url = profile.avatar_url;
      this.user.dateCount = profile.dateCount;

      console.log(profile);
       resolve();
  },
  
  );
});
return promise;
}
getRepoInfo(username) {
interface ApiResponse {
  name: string;
  homepage: string;
  description: string;
  html_url: string;
  clone_url: string;
  dateCount: Date;
}
this.http.get<ApiResponse>("https://api.github.com/users/"+ username + "/repos?access_token=4e506891c065d69bf641bbe51727e32d407658e2").subscribe(response => {

  this.items = response;  
});
}
}