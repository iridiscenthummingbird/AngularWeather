import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-three-days',
  templateUrl: './three-days.component.html',
  styleUrls: ['./three-days.component.css']
})
export class ThreeDaysComponent implements OnInit {

  public response: any;

  public days: Date[] = [];

  public data: any;

  city: any;

  public setBgColor(num: number): string {
    if (num < 4.9) {
      return 'none';
    }
    else if (num < 9.9) {
      return 'linear-gradient(to right, #c7dfff 0%, #ebebeb 50%)';
    }
    else if (num < 14.9) {
      console.log(num);
      return 'linear-gradient(to right, #c7dfff 0%, #ffdd7d 50%)';
    }
    else {
      return 'linear-gradient(to right, #c7dfff 0%, #ff8585 50%)';
    }
  }

  public search() {
    this.http.get('http://api.openweathermap.org/data/2.5/onecall?appid=4be025c02da187c41c9e315a456e1bb6&lon=4.5333&lat=51.0667&units=metric')
      .subscribe((response) => {
        this.response = response;
        this.dataService.setData(this.response);
        this.data = this.response;
      });
  }

  constructor(private http: HttpClient, private dataService: DataService) {
    if (this.dataService.getData() == null)
    {
      this.search();
    } else {
      this.data = this.dataService.getData();
      this.city = this.dataService.city;
    }
    for (let i = 0; i < 3; i++){
      const tmp = new Date();
      tmp.setDate(new Date().getDate() + i);
      this.days.push(tmp);
    }
  }

  ngOnInit(): void {
  }

}
