import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  app: string;
  ver: string;

  constructor() {
    console.log('I am doing nothing');
  }
}
