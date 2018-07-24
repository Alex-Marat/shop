import {Component, ElementRef, Inject, OnInit, Optional, ViewChild} from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantsService } from '../../services/constants.service';
import { GeneratorService } from '../../services/generator.service';
import { GeneratorServiceProvider, RANDOM_WORD_GENERATOR } from '../../services/generator.service.provider';

@Component({
  selector: 'app-demo-services-working',
  templateUrl: './demo-services-working.component.html',
  styleUrls: ['./demo-services-working.component.scss'],
  providers: [ GeneratorService, GeneratorServiceProvider ]
})
export class DemoServicesWorkingComponent implements OnInit {
  @ViewChild('inputKey') key: ElementRef;
  @ViewChild('inputValue') value: ElementRef;

  valueFromStorage: string;
  currentLocalStorageData: object;
  config: string;
  constants: ConstantsService;
  randomString: string;

  constructor(
    public lsService: LocalStorageService,
    public configService: ConfigOptionsService,
    @Inject(RANDOM_WORD_GENERATOR) public randomWord: string,
    @Optional() public constantsService: ConstantsService
  ) {
      this.constantsService = constantsService ? constantsService : { app: 'default', ver: '0.0'};
  }

  ngOnInit() {
    this.currentLocalStorageData = Object.entries(this.lsService.getStorage());
    this.constants = this.constantsService;
  }

  saveInStorage(key, value) {
    if (key) {
      this.lsService.setItem(key, value);
      this.clearInputFields();
      this.refreshLSDAta();
    }
  }

  private clearInputFields(): any {
    this.key.nativeElement.value = '';
    this.value.nativeElement.value = '';
  }

  getByKey(key) {
    if (key) {
      this.valueFromStorage = this.lsService.getItem(key);
    }
  }

  removeByKey(key) {
    if (key) {
      this.lsService.removeItem(key);
      this.refreshLSDAta();
    }
  }

  refreshLSDAta() {
    this.currentLocalStorageData = Object.entries(this.lsService.getStorage());
  }

  saveConfig(id, login, email) {
    this.configService.setConfig({id, login, email});
  }

  getConfig() {
    this.config = JSON.stringify(this.configService.getConfig());
  }

  clearInputs(args) {
    Array.from(arguments).forEach((item) => {
      item.value = '';
    });
  }

  generateString() {
    this.randomString = this.randomWord;
  }
}
