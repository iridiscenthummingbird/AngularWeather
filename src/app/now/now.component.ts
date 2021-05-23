import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css'],
  providers: []
})
export class NowComponent implements OnInit {

  response: any;

  city: any;

  country: any;

  data: any;


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
      this.country = this.dataService.country;
    }
  }

  ngOnInit(): void {
  }

  refresh() {
    this.data = this.dataService.getData();
    this.city = this.dataService.city;
    this.country = this.dataService.country;
  }

}
