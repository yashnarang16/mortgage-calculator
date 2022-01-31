import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityIcons } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';
import { FormsModule } from '@angular/forms';
import { MortgageSummaryComponent } from './components/mortgage-summary/mortgage-summary.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';



@NgModule({
  declarations: [
    HeadersComponent,
    CalculatorFormComponent,
    MortgageSummaryComponent,
    NumbersOnlyDirective,
    CurrencyFormatterDirective
  ],
  imports: [
    CommonModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    HeadersComponent,
    CalculatorFormComponent,
    FormsModule,
    ClarityModule,
    MortgageSummaryComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class SharedModule { }
