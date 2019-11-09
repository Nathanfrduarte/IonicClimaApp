import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    // return this.httpClient.get(`https://api.apixu.com/v1/current.json?key=YOUR_APIXU_KEY=${city}`);

    // APIXU API is now WeatherStack: 27eec7771bd212790da05f6019ed0793 | 27eec7771bd212790da05f6019ed0793
    // http://api.weatherstack.com/current?access_key = YOUR_ACCESS_KEY& query = New York
    // optional parameters: 
    // & units = m
    // & language = en
    // & callback = MY_CALLBACK
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=27eec7771bd212790da05f6019ed0793&query=${city}`);
  }
}
