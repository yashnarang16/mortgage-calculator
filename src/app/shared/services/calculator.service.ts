import { ICalculator, ISummary } from './../interfaces/calculator.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }


  calculateMortgage(model: ICalculator): ISummary {
    const principal = parseFloat(model.principal);
    const totalInstallments = this.getTotalOfInstallments(model);
    const interestPerMonth = this.getRateOfInterestPerMonth(model);
    const numo = ((principal * (interestPerMonth)) * Math.pow((1 + interestPerMonth), (totalInstallments)));
    const deno = (Math.pow((1 + interestPerMonth), (totalInstallments)) - 1);
    let monthlyPayment = (numo / deno);
    const totalAmount = (monthlyPayment * totalInstallments);
    return {
      principal: (principal).toString(),
      totalNumberOfInstallments: totalInstallments,
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      interestPaid: (totalAmount - principal).toFixed(2)
    }

  }


  calculateNumberOfYears(model: ICalculator) {
    if (model.months !== null) {
      return model.years + (model.months / 12);
    }
    return model.years || 0;
  }

  getFloatRateOfInterest(interest: number) {
    let rate = interest / 100;
    return rate;
  }

  getRateOfInterestPerMonth(model: ICalculator) {
    const rate = this.getFloatRateOfInterest(model.interest) / model.frequency;
    return rate;
  }

  getTotalOfInstallments(model: ICalculator) {
    return this.calculateNumberOfYears(model) * model.frequency;
  }


}
