import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response, User } from './user';

@Injectable()
export class RandomuserService {

  private readonly apiUrl = 'https://randomuser.me/api';
  constructor(private httpClient: HttpClient) { }

public async get(seed: string): Promise<User> {
  let params = new HttpParams();
  params = params.set('inc', 'name,email,phone,dob,picture');
  if (seed) {
    params = params.set('seed', seed);
  }
  const response = await this.httpClient
  .get<Response>(this.apiUrl, {params})
  .toPromise<Response>();

  return {
    name: response.results[0].name.first,
    email: response.results[0].email,
    phone: response.results[0].phone,
    picture: response.results[0].picture.medium,
    dob: new Date(response.results[0].dob)
  };
}
}
