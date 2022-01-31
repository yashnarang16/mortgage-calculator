import { SharedModule } from './shared/shared.module';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MortgageCalculatorPageComponent } from './pages/mortgage-calculator-page/mortgage-calculator-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'CAD'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
