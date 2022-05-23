import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:4000/api';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/user/login`, {
      email,
      password
    }, {
      observe: 'response'
    });
  }

  signup(name: string, email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/user/register`, {
      name,
      email,
      password
    }, {
      observe: 'response'
    });
  }


}
