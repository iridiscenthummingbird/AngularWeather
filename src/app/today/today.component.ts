import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
  providers: []
})
export class TodayComponent implements OnInit {

  response: any;

  data: any;

  city: any;

  country: any;

  weatherData: any[] = [];

  day: Date = new Date();

  setBgColor(num: number): string {
    if (num < 4.9) {
      return 'none';
    } else if (num < 9.9) {
      return 'linear-gradient(to right, #c7dfff 0%, #ebebeb 50%)';
    } else if (num < 14.9) {
      return 'linear-gradient(to right, #c7dfff 0%, #ffdd7d 50%)';
    } else {
      return 'linear-gradient(to right, #c7dfff 0%, #ff8585 50%)';
    }
  }

  getData() {
    this.http.get('http://api.openweathermap.org/data/2.5/onecall?appid=4be025c02da187c41c9e315a456e1bb6&lon=' + this.dataService.lon + '&lat=' + this.dataService.lat + '&units=metric')
      .subscribe((response) => {
        this.response = response;
        this.dataService.setData(this.response);
        this.data = this.response;
        this.refresh();
      });
  }

  constructor(private http: HttpClient, private dataService: DataService) {
    if (this.dataService.getData() == null)
    {
      this.getData();
    } else {
      this.city = this.dataService.city;
      this.country = this.dataService.country;
      this.data = this.dataService.getData();
      let counter = -24;
      let checkCounter = 0;
      for (let i = 0; this.weatherData.length < 8; i++){
        if (new Date(this.data.hourly[i].dt * 1000).getHours() === 2){
          counter = 0;
          checkCounter = 0;
          this.weatherData.push(this.data.hourly[i]);
        }
        if (counter - checkCounter === 3) {
          this.weatherData.push(this.data.hourly[i]);
          checkCounter = counter;
        }
        counter++;
      }
    }
  }

  ngOnInit(): void {
  }

  refresh() {
    this.data = this.dataService.getData();
    let counter = -24;
    let checkCounter = 0;
    this.weatherData = [];
    for (let i = 0; this.weatherData.length < 8; i++){
      if (new Date(this.data.hourly[i].dt * 1000).getHours() === 2){
        counter = 0;
        checkCounter = 0;
        this.weatherData.push(this.data.hourly[i]);
      }
      if (counter - checkCounter === 3) {
        this.weatherData.push(this.data.hourly[i]);
        checkCounter = counter;
      }
      counter++;
    }
    this.city = this.dataService.city;
    this.country = this.dataService.country;
  }

}
