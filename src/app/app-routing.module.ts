import { MortgageCalculatorPageComponent } from './pages/mortgage-calculator-page/mortgage-calculator-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'm-calculator', component: MortgageCalculatorPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'm-calculator' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
