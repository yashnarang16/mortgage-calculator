import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { CurrencyPipe } from '@angular/common';
import { ElementRef, Component, DebugElement } from '@angular/core';
import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { By } from '@angular/platform-browser';

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
  public model = {
    principal: '$10,000.00'
  }
 }

describe('CurrencyFormatterDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: HTMLElement;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ClarityModule],
      declarations: [ContainerComponent, CurrencyFormatterDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }, CurrencyPipe
      ],
    });

    fixture = TestBed.createComponent(ContainerComponent);
     fixture.detectChanges(); // without the provider
    container = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(CurrencyFormatterDirective));
  });
  it('should create an instance with on focus', () => {
    let event : KeyboardEvent = {
      target: {
        value: '$1,000'
      }
    } as any
    inputEl.triggerEventHandler('focus', event);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('1000');
  });

  it('should create an instance with on blur', () => {
    let event : KeyboardEvent = {
      target: {
        value: '1000'
      }
    } as any
    inputEl.triggerEventHandler('blur', event);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('$1,000.00');
  });
});
