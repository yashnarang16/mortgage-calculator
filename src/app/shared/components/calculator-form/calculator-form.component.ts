import { PAYMENT_FREQUENCY } from './../../constants/app.constant';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm}]
})
export class CalculatorFormComponent implements OnInit {
 

  @Input() form: NgForm | undefined;
  @Input() model: any | null;
  @Input() years: number [] | null = [];
  @Input() months: number[] | null = [];
  

  public frequency = PAYMENT_FREQUENCY;
  constructor() { }

  ngOnInit(): void {
  }

}
