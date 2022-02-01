import { CalcumatorModel } from 'src/app/shared/classes/calculator.model';
 import { NumbersOnlyDirective } from './numbers-only.directive';


import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-container',
  template: `
    <div>
    <label class="clr-col-12 clr-col-md-4">Mortgage Amount</label>
    <input id ='principle' class="clr-col-12 clr-col-md-6" clrControl placeholder="Enter the amount" name="principal" appNumbersOnly appCurrencyFormatter
        [(ngModel)]="model.principal" [value]='principalCtrl.value | currency' [ngModelOptions]="{updateOn: 'blur'}" #principalCtrl='ngModel' required minlength="1" />
    </div>
  `
})
class ContainerComponent {
  public model = new CalcumatorModel();
 }

describe('NumbersOnlyDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ClarityModule],
      declarations: [ContainerComponent, NumbersOnlyDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }, CurrencyPipe
      ],
    });

    fixture = TestBed.createComponent(ContainerComponent);
    // fixture.detectChanges(); // without the provider
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });
  it('should create an instance', () => {
    const targetElement = <HTMLElement>element.querySelector('#principle');
    expect(targetElement.getAttribute('name')).toBe('principal');
  });
});

