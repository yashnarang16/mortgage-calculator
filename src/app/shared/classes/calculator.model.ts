import { ICalculator } from './../interfaces/calculator.interface';
export class CalcumatorModel implements ICalculator {
principal: string;
interest: number;
years: number;
months: number | null;
frequency: number;

constructor() {
    this.principal = '100000';
    this.interest = 5
    this.years = 25;
    this.months = null;
    this.frequency = 12;
}

}
