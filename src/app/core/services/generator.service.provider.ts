import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const RANDOM_WORD_GENERATOR = new InjectionToken<string>('RANDOM_WORD_GENERATOR');

const GeneratorServiceFactory = (length: number) => {
  return (service: GeneratorService): string => service.getRandomWord(length);
};

export const GeneratorServiceProvider =  {
  provide: RANDOM_WORD_GENERATOR,
  useFactory: GeneratorServiceFactory(50),
  deps: [ GeneratorService ]
};
