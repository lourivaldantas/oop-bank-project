import { Client } from "./client";

export abstract class Account {
    protected _idAccount: number;                 // id da conta
    protected _client: Client;                    // cliente
    protected _accountNumber: number;             // número da conta
    protected _verificationDigit: number;         // dígito verificador
    protected _agencyNumber: number;              // número da agência
    protected _bankName: string;                  // nome do banco
    protected _bankCode: number;                  // código do banco
    protected _balance: number;                   // saldo
    protected _openingDate: Date;                 // data de abertura

        constructor(
            idAccount: number,
            client: Client,
            accountNumber: number,
            agencyNumber: number,
            verificationDigit: number,
            bankName: string,
            bankCode: number,
            balance: number,
            openingDate: Date
        ) {
            this.idAccount = idAccount;
            this.client = client;
            this.accountNumber = accountNumber;
            this.agencyNumber = agencyNumber;
            this.verificationDigit = verificationDigit;
            this.bankName = bankName;
            this.bankCode = bankCode;
            this._balance = balance;
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
    public set agencyNumber(value: number) {
        this._agencyNumber = value;
    }
    public get agencyNumber(): number {
        return this._agencyNumber;
    }

    // bankName
    public set bankName(value: string) {
        this._bankName = value;
    }
    public get bankName(): string {
        return this._bankName;
    }

    // bankCode
    public set bankCode(value: number) {
        this._bankCode = value;
    }
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

}