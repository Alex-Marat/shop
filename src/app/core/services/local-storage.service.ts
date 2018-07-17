import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  localStorage;

  constructor() {
    this.localStorage = (typeof window !== 'undefined') ? window.localStorage : null;
    this.setDefaultConfig();
  }

  setDefaultConfig() {
    if (localStorage) {
      this.setItem('cat', '😼');
    }
  }

  setItem(key: string, value) {
    if (this.localStorage) {
      this.localStorage.setItem(key, value);
    }
  }

  getItem(key: string) {
    if (this.localStorage) {
      return this.localStorage.getItem(key);
    }
  }

  getStorage() {
    return this.localStorage;
  }

  removeItem(key) {
    if (this.localStorage) {
      this.localStorage.removeItem(key);
    }
  }
}
