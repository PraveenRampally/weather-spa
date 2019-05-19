import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Temperature } from 'src/app/temperature/shared/models/temperature.model';

@Injectable({
  providedIn: 'root'
})
export class TemperatureDataService {

  uri = '';

  constructor(private http: HttpClient) {
      this.uri = environment.baseUri;
   }

  addTemperature(temperature: Temperature) {
  return  this.http.post(`${this.uri}/temperature`, temperature);
  }

  getTemperatures() {
    return this
           .http
           .get(`${this.uri}/temperatures`);
  }

 deleteTemperature(id) {
    return this
              .http
              .delete(`${this.uri}/temperature/${id}`);
  }
}