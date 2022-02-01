import { CalcumatorModel } from 'src/app/shared/classes/calculator.model';
import { SharedModule } from './../../shared.module';
import { ClarityModule } from '@clr/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyFormatterDirective } from '../../directives/currency-formatter.directive';

import { CalculatorFormComponent } from './calculator-form.component';

describe('CalculatorFormComponent', () => {
  let component: CalculatorFormComponent;
  let fixture: ComponentFixture<CalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CalculatorFormComponent, CurrencyFormatterDirective ],
      providers: [ NgForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorFormComponent);
    component = fixture.componentInstance;
    component.model = new CalcumatorModel();
    component.form = new NgForm([],[]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with form, intiallization', () => {
    expect(component.form?.valid).toBeTruthy();
  });
});
