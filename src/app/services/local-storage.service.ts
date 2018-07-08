import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private STORAGE_KEY = 'list-manager-v-01';

  constructor( ) {
    if (localStorage.getItem(this.STORAGE_KEY) === null) {
      localStorage.setItem(this.STORAGE_KEY, '{}');
    }
  }

  setValue(key: string, value: any): void {
    const data = JSON.parse( localStorage.getItem(this.STORAGE_KEY) );
    if (data[key] === undefined) {
      data[key] = {};
    }
    data[key] = Object.assign(data[key], value);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  setAll(value: any): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }

  getValue(key: string): any {
    const data = JSON.parse( localStorage.getItem(this.STORAGE_KEY) );
    return data[key];
  }

  getAll(): any {
    return JSON.parse( localStorage.getItem(this.STORAGE_KEY) );
  }

}
