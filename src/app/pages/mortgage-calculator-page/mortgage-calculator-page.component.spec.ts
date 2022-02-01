import { NgForm } from '@angular/forms';
import { CalcumatorModel } from 'src/app/shared/classes/calculator.model';
import { SharedModule } from './../../shared/shared.module';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MortgageCalculatorPageComponent } from './mortgage-calculator-page.component';

describe('MortgageCalculatorPageComponent', () => {
  let component: MortgageCalculatorPageComponent;
  let fixture: ComponentFixture<MortgageCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  SharedModule ],
      declarations: [ MortgageCalculatorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorPageComponent);
    component = fixture.componentInstance;
    component.model = new CalcumatorModel();
    component.mortgageForm = new NgForm([],[]);
    component.mortgageForm.setValue
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create with calculate method', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.summary).toBeDefined();
    expect(component.summary?.principal).toBe('100000');
    expect(component.summary?.monthlyPayment).toBe('584.59');
  });

 
});
