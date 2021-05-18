import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any;

  lat: any;

  lon: any;

  city: any;

  country: any;

  getData(): any{
    return this.data;
  }

  setData(data: any){
    this.data = data;
  }

  constructor() { }
}
