import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather';

  public response: any;

  public city: any;

  showDropDown: boolean;

  public search() {
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=4be025c02da187c41c9e315a456e1bb6&units=metric')
        .subscribe((response) => {
          this.response = response;
          console.log(this.response);
          if (this.response.cod === 200){
            this.showDropDown = true;
          }
        },
          (error => {
            this.showDropDown = false;
          }));
  }
  chooseCity(){
    this.showDropDown = false;
    this.city = '';
    this.dataService.lat = this.response.coord.lat;
    this.dataService.lon = this.response.coord.lon;
    this.dataService.city = this.response.name;
    this.dataService.country = this.response.sys.country;
    this.http.get('http://api.openweathermap.org/data/2.5/onecall?appid=4be025c02da187c41c9e315a456e1bb6&lon=' + this.dataService.lon + '&lat=' + this.dataService.lat + '&units=metric')
      .subscribe((response) => {
        const tmp = response;
        console.log(this.dataService.getData());
        this.dataService.setData(tmp);
        console.log(this.dataService.getData());
      });
  }

  constructor(private http: HttpClient, private dataService: DataService) {
    this.showDropDown = false;
  }

  ngOnInit(): void {
    this.city = '';
  }
}
