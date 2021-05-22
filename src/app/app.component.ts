import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';

  public response: any;

  public city: any;

  showDropDown: boolean;

  private routedComponent: any;

  public setRoutedComponent(componentRef: any) {
    this.routedComponent = componentRef;
  }

  public search() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=4be025c02da187c41c9e315a456e1bb6&units=metric')
      .subscribe((response) => {
          this.response = response;
          if (this.response.cod === 200) {
            this.showDropDown = true;
          }
        },
        (error => {
          this.showDropDown = false;
        }));
  }

  refreshComponent() {
    this.routedComponent.refresh();
    // this.router.navigate(['/today']);
    // this.router.navigate(['/now']);
    //this.router.navigate([this.router.url]);
  }

  chooseCity() {
    this.showDropDown = false;
    this.city = '';
    this.dataService.lat = this.response.coord.lat;
    this.dataService.lon = this.response.coord.lon;
    this.dataService.city = this.response.name;
    this.dataService.country = this.response.sys.country;
    this.http.get('http://api.openweathermap.org/data/2.5/onecall?appid=4be025c02da187c41c9e315a456e1bb6&lon=' + this.dataService.lon + '&lat=' + this.dataService.lat + '&units=metric')
      .subscribe((response) => {
        const tmp = response;
        this.dataService.setData(tmp);
        this.refreshComponent();
      });
  }

  constructor(private http: HttpClient, private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.showDropDown = false;
  }

  ngOnInit(): void {
    this.city = '';
  }
}
