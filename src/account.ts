import { Client } from "./client";

export abstract class Account {
              protected _idAccount: number;                          // id da conta
    protected _client: Client;                                       // cliente
    protected _accountNumber: number;                                // número da conta
    protected _verificationDigit: number;                            // dígito verificador
    protected readonly _agencyNumber: number = 2;                    // número da agência
    protected readonly _bankName: string = 'Banco Master';           // nome do banco
    protected readonly _bankCode: number = 243;                      // código do banco
    protected _balance: number = 0;                                  // saldo
    protected _openingDate: Date;                                    // data de abertura

        constructor(
            idAccount: number,
            client: Client,
            accountNumber: number,
            verificationDigit: number,
            openingDate: Date
        ) {
            this.idAccount = idAccount;
            this.client = client;
            this.accountNumber = accountNumber;
            this.verificationDigit = verificationDigit;
            this._openingDate = openingDate;
        }

    // idAccount
    public set idAccount(value: number) {
        this._idAccount = value;
    }
    public get idAccount(): number {
        return this._idAccount;
    }

    // client
    public set client(value: Client) {
        this._client = value;
    }
    public get client(): Client {
        return this._client;
    }

    // accountNumber
    public set accountNumber(value: number) {
        this._accountNumber = value;
    }
    public get accountNumber(): number {
        return this._accountNumber;
    }

    // verificationDigit
    public set verificationDigit(value: number) {
        this._verificationDigit = value;
    }
    public get verificationDigit(): number {
        return this._verificationDigit;
    }

    // agencyNumber
    public get agencyNumber(): number {
        return this._agencyNumber;
    }

    // bankName
    public get bankName(): string {
        return this._bankName;
    }

    // bankCode
    public get bankCode(): number {
        return this._bankCode;
    }

    // balance
    public get balance(): number {
        return this._balance;
    }

    // openingDate
    public get openingDate(): Date {
        return this._openingDate;
    }
    // Data de abertura formatada (DD/MM/YYYY)
    public getOpeningDateFormatted(): string {
        const day = this._openingDate.getDate().toString().padStart(2, '0');
        const month = (this._openingDate.getMonth() + 1).toString().padStart(2, '0');
        const year = this._openingDate.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }

    // Classe abstrada para depósito
    protected abstract deposit(amount: number): void;

    // Classe abstrata para saque
    protected abstract withdraw(amount: number): void;
}
