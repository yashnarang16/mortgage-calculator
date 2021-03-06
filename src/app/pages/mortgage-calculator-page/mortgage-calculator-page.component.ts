import { LoaderService } from './../../shared/services/loader.service';
import { ISummary } from './../../shared/interfaces/calculator.interface';
import { CalculatorService } from './../../shared/services/calculator.service';
import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CalcumatorModel } from 'src/app/shared/classes/calculator.model';
import { asapScheduler, delay, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-mortgage-calculator-page',
  templateUrl: './mortgage-calculator-page.component.html',
  styleUrls: ['./mortgage-calculator-page.component.scss']
})
export class MortgageCalculatorPageComponent implements OnInit, OnDestroy {

  public model: any = new CalcumatorModel();
  public years: number[] = [];
  public months: number[] = [];
  public summary: ISummary | undefined;
  public loading$: Observable<boolean> = this.loaderService.loading$;
  public subscription$: Subscription | undefined;
  @ViewChild('mortgageForm', { static: true }) mortgageForm: NgForm | undefined;
  constructor(private calculatorService: CalculatorService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.years = Array(30).fill(1).map((x, i) => i + 1);
    this.months = Array(11).fill(1).map((x, i) => i + 1);


    this.calculate();
  }

  calculate() {
    if (this.mortgageForm?.valid) {
      this.loaderService.show();
      this.summary = this.calculatorService.calculateMortgage(this.model);
      this.subscription$ = this.loaderService.loaderDelay(this.summary).subscribe((res: any) => {
        this.loaderService.hide();
        this.subscription$?.unsubscribe();
      });
    }
    return;
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$?.unsubscribe();
    }

  }

}
