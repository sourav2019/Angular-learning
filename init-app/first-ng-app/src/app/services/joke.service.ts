import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ChuckNorrisJoke } from '../../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  constructor(private http:HttpClient) {
    this.http = http;
   }

  //  if we want to access http in function
  //  private http = inject(HttpClient);

  getJokes(): Observable<ChuckNorrisJoke> {
    return this.http.get<ChuckNorrisJoke>("https://api.chucknorris.io/jokes/random?category=dev");
  }
}
