import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  response: any;

  data: any;

  days: Date[] = [];

  daysData: any[] = [];

  city: any;

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
    if (this.dataService.getData() == null) {
      this.getData();
    } else {
      this.data = this.dataService.getData();
      this.city = this.dataService.city;
      for (let i = 0; i < 7; i++) {
        const tmp = new Date();
        tmp.setDate(new Date().getDate() + i);
        this.days.push(tmp);
        this.daysData[i] = this.data.daily[i];
      }
    }
  }

  ngOnInit(): void {
  }

  refresh() {
    this.data = this.dataService.getData();
    this.city = this.dataService.city;
    this.daysData = [];
    this.days = [];
    for (let i = 0; i < 7; i++) {
      const tmp = new Date();
      tmp.setDate(new Date().getDate() + i);
      this.days.push(tmp);
      this.daysData[i] = this.data.daily[i];
    }
  }

}
