import '@cds/core/icon/register.js';
import { bankIcon, ClarityIcons} from '@cds/core/icon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  addIcons() {
    ClarityIcons.addIcons(bankIcon);
  }
}
