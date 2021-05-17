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

  public response: any;

  public data: any;

  public search() {
    this.http.get('http://api.openweathermap.org/data/2.5/onecall?appid=4be025c02da187c41c9e315a456e1bb6&lon=4.5333&lat=51.0667&units=metric')
      .subscribe((response) => {
        this.response = response;
        this.dataService.setData(this.response);
        this.data = this.response;
      });
  }

  constructor(private http: HttpClient, private dataService: DataService) {
    if(this.dataService.getData() == null)
    {
      this.search();
    } else {
      this.data = this.dataService.getData();
    }
  }



  ngOnInit(): void {
  }

}
