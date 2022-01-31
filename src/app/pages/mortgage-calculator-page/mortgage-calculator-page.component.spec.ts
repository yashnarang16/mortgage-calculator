import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorPageComponent } from './mortgage-calculator-page.component';

describe('MortgageCalculatorPageComponent', () => {
  let component: MortgageCalculatorPageComponent;
  let fixture: ComponentFixture<MortgageCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
