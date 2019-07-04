import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: string;

  constructor() { }

  getResult(): string {
    return this.result;
  }
  setResult(result: string) {
    this.result = result;
  } 
}
