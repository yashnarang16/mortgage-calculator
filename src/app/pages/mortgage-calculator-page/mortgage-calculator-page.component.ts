import { ISummary } from './../../shared/interfaces/calculator.interface';
import { CalculatorService } from './../../shared/services/calculator.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalcumatorModel } from 'src/app/shared/classes/calculator.model';

@Component({
  selector: 'app-mortgage-calculator-page',
  templateUrl: './mortgage-calculator-page.component.html',
  styleUrls: ['./mortgage-calculator-page.component.scss']
})
export class MortgageCalculatorPageComponent implements OnInit {

  public model: any = new CalcumatorModel();
  public years: number[] = [];
  public months: number[] = [];
  public summary: ISummary | undefined;
  @ViewChild('mortgageForm', { static: true }) mortgageForm: NgForm | undefined;
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.years = Array(30).fill(1).map((x, i) => i + 1);
    this.months = Array(11).fill(1).map((x, i) => i + 1);


    this.calculate();
  }

  calculate() {
    if (this.mortgageForm?.valid) {
      this.summary = this.calculatorService.calculateMortgage(this.model);
    }
    return;
  }

}
