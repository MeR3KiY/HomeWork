import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
  }

}
