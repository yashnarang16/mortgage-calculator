import { ICalculator } from './../../interfaces/calculator.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ISummary } from '../../interfaces/calculator.interface';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.scss']
})
export class MortgageSummaryComponent implements OnInit {


  @Input() summary: ISummary | undefined;
  @Input() model: ICalculator | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
