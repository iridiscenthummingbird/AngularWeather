import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any;

  lat: any = '51.5085';

  lon: any = '-0.1257';

  city: any = 'London';

  country: any = 'GB';

  getData(): any{
    return this.data;
  }

  setData(data: any){
    this.data = data;
  }

  constructor(private cookie: CookieService) {
    const lat = this.cookie.get('lat');
    const lon = this.cookie.get('lon');
    const city = this.cookie.get('city');
    const country = this.cookie.get('country');
    if (lat !== '' && lon !== '' && city !== '' && country !== ''){
      this.lat = lat;
      this.lon = lon;
      this.city = city;
      this.country = country;
    }
  }
}
