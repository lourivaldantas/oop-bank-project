import { User } from "../models/user";
import { Account } from "../models/account";
import { CheckingAccount } from "../models/checkingAccount";
import { SavingsAccount } from "../models/savingsAccount";
import { Client } from "../models/client";
import { promises as fs } from "fs";

const CSV_FILE = "data/accounts.csv";

export class Employee extends User {
    constructor(
        id: number,
        cpf: string,
        name: string,
        birthday: Date,
        email: string,
        phone: string
    ) {
        super(id, cpf, name, birthday, email, phone);
    }

    // Abre conta e salva no CSV
    public async openAccountCSV(client: Client, initialBalance: number, type: "checking" | "savings" = "checking"): Promise<Account> {
        let csvData = "";
        try { csvData = await fs.readFile(CSV_FILE, "utf-8"); } catch { csvData = ""; }
        const lines = csvData.split("\n").filter(line => line.trim() !== "");
        const existingAccountNumbers = lines.map(line => Number(line.split(",")[1]));

        let accountNumber: number;
        do { accountNumber = Math.floor(Math.random() * 1000000); } while (existingAccountNumbers.includes(accountNumber));

        const verificationDigit = Math.floor(Math.random() * 10);
        const openingDate = new Date();

        let newAccount: Account;
        if (type === "checking") {
            newAccount = new CheckingAccount(Date.now(), client, accountNumber, verificationDigit, openingDate);
        } else {
            newAccount = new SavingsAccount(Date.now(), client, accountNumber, verificationDigit, openingDate);
        }

        if (initialBalance > 0) newAccount.deposit(initialBalance);

        const csvLine = [
            newAccount.idAccount,
            newAccount.accountNumber,
            newAccount.verificationDigit,
            newAccount.agencyNumber,
            newAccount.bankCode,
            newAccount.balance,
            newAccount.openingDate.toISOString(),
            type
        ].join(",") + "\n";

        await fs.appendFile(CSV_FILE, csvLine);

        return newAccount;
    }

    // Autoriza empréstimo até 30% da renda
    public authorizeLoan(client: Client, amount: number): boolean {
        return amount <= client.grossIncome * 0.3;
    }

    // Realiza empréstimo se autorizado
    public performLoan(client: Client, account: Account, amount: number): boolean {
        if (this.authorizeLoan(client, amount)) {
            account.deposit(amount);
            return true;
        }
        return false;
    }
}
