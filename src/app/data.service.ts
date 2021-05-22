import { Injectable } from '@angular/core';

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

  constructor() { }
}
