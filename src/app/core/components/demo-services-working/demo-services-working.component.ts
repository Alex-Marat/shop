import { Component, ElementRef, OnInit, Optional, ViewChild } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantsService } from '../../services/constants.service';
import { GeneratorService} from '../../services/generator.service';

@Component({
  selector: 'app-demo-services-working',
  templateUrl: './demo-services-working.component.html',
  styleUrls: ['./demo-services-working.component.scss']
})
export class DemoServicesWorkingComponent implements OnInit {
  @ViewChild('inputKey') key: ElementRef;
  @ViewChild('inputValue') value: ElementRef;

  valueFromStorage: string;
  currentLS;
  config;
  constants: ConstantsService;
  randomString: string;
  generator: GeneratorService;

  constructor(
    public lsService: LocalStorageService,
    public configService: ConfigOptionsService,
    @Optional() public constantsService: ConstantsService
  ) {
      this.constantsService = constantsService ? constantsService : { app: 'default', ver: '0.0'};
  }

  ngOnInit() {
    this.currentLS = Object.entries(this.lsService.getStorage());
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
    this.currentLS = Object.entries(this.lsService.getStorage());
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

  generateString(length) {
    if (Number.isNaN(+length)) {
      console.log('The value should be a number !');
      return;
    }

    if ( !(this.generator && this.generator.getLength() === +length) ) {
      this.generator = new GeneratorService(+length);
      console.log('new generator created');
    }
    this.randomString = this.generator.getRandomWord();
  }
}
