import { Account } from "./account";
import { Client } from "./client";

export class SavingsAccount extends Account {
    private _withdrawalsThisMonth: number = 0;
    private _withdrawalLimit: number = 3; // maximum withdrawals per month
    private _monthlyInterestRate: number = 0.01; // 1% monthly interest
        constructor(
            idAccount: number,
            client: Client,
            accountNumber: number,
            verificationDigit: number,
            openingDate: Date,
        ) {
            super(idAccount, client, accountNumber, verificationDigit, openingDate)
        }

    // Substituir a opção de saque para limitar os saques mensais
    public withdraw(amount: number): boolean {
        if (this._withdrawalsThisMonth >= this._withdrawalLimit) {
            return false; // exceeded withdrawal limit
        }

        const success = super.withdraw(amount);
        if (success) {
            this._withdrawalsThisMonth++;
        }

        return success;
    }

    // Aplicar juros mensais ao saldo
    public applyMonthlyInterest(): void {
        this._balance += this._balance * this._monthlyInterestRate;
    }

    // Reiniciar a contagem de saques mensais (a ser executada no início de um novo mês)
    public resetMonthlyWithdrawals(): void {
        this._withdrawalsThisMonth = 0;
    }
      public transfer(amount: number, targetAccount: Account): boolean {
        if (this._withdrawalsThisMonth >= this._withdrawalLimit) return false;

        const success = super.transfer(amount, targetAccount);
        if (success) this._withdrawalsThisMonth++;
        return success;
    }
}