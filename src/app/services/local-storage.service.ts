import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  setStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

}
