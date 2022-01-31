export interface ICalculator {
 principal: string;
 interest: number;
 years: number;
 months: number | null;
 frequency: number;
}


export interface ISummary {
    principal: string;
    totalNumberOfInstallments: number;
    monthlyPayment: string
    interestPaid: string;
    totalAmount: string
}