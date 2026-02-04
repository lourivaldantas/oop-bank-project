import { Account } from "./account";
import { Client } from "./client";

export class CheckingAccount extends Account {
     private _overdraftLimit: number = 500
        constructor(
            idAccount: number,
            client: Client,
            accountNumber: number,
            verificationDigit: number,
            openingDate: Date,
            overdraftLimit?: number,
        ) {
            super(idAccount, client, accountNumber, verificationDigit, openingDate);
            if (overdraftLimit !== undefined) {
            this._overdraftLimit = overdraftLimit;
        }
        }
    
    // Substitui saques para permitir o uso de cheque especial
    public withdraw(amount: number): boolean {
        if (amount <= 0) return false;
        if (amount > this._balance + this._overdraftLimit) return false;
        this._balance -= amount;
        return true;
    }

    // Substitui a transferência para considerar o descoberto
    public transfer(amount: number, targetAccount: Account): boolean {
        if (amount <= 0) return false;
        if (amount > this._balance + this._overdraftLimit) return false;
        const success = super.transfer(amount, targetAccount);
        return success;
    }

    //  Limite de cheque especial
    public get overdraftLimit(): number {
        return this._overdraftLimit;
    }
}

