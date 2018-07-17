import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  private length: number;

  constructor(n: number) {
    this.length = n;
  }

  getLength() {
    return this.length;
  }

  getRandomWord() {
    return Array.from(Array(this.length)).map(() => this.getRandomLetter()).join('');
  }

  getRandomLetter() {
    const letter = Math.floor(Math.random() * 36).toString(36);
    return Math.round(Math.random()) ? letter : letter.toUpperCase();
  }
}
