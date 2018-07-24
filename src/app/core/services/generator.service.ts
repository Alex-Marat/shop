import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  getRandomWord(length) {
    return Array.from(Array(length)).map(() => this.getRandomLetter()).join('');
  }

  getRandomLetter() {
    const letter = Math.floor(Math.random() * 36).toString(36);
    return Math.round(Math.random()) ? letter : letter.toUpperCase();
  }
}
