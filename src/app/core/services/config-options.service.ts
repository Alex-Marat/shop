import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private id: string;
  private login: string;
  private email: string;

  getConfig() {
    return {
      id: this.id,
      login: this.login,
      email: this.email
    };
  }

  setConfig(config) {
    if (this.isConfig(config)) {
      this.id  = config.id;
      this.login  = config.login;
      this.email  = config.email;
    }
  }

  private isConfig(conf) {
    return conf != null
      && conf.id != null
      && conf.login != null
      && conf.email != null;
  }
}
