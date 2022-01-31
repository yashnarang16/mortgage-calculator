import '@cds/core/icon/register.js';
import { ClarityIcons, piggyBankIcon, userIcon, vmBugIcon } from '@cds/core/icon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  addIcons() {
    ClarityIcons.addIcons(vmBugIcon, piggyBankIcon);
  }
}
