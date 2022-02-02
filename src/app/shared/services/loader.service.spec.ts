import { ISummary } from './../interfaces/calculator.interface';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { of } from 'rxjs';


describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with loader delay', waitForAsync(() => {
    let val: ISummary = {
      principal: '10000',
      totalNumberOfInstallments: 300,
      monthlyPayment: '898',
      interestPaid: '909',
      totalAmount: '0990'
    }
    const obs = service.loaderDelay(val);
    obs.subscribe(res => {
      expect(res).toBe(val);
    })
  }))
});
