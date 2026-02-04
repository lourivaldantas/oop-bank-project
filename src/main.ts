import { Client } from "./models/client";
import { Employee } from "./services/employee";
import { CheckingAccount } from "./models/checkingAccount";
import { SavingsAccount } from "./models/savingsAccount";

async function main() {
    // Criar clientes
    const toffili = new Client(1, "12345678901", "Lourival Dantas", new Date(1970, 11, 9), "lourival@email.com", "999999999", 5000);
    const bruno = new Client(2, "98765432100", "Bruno Gomes", new Date(2002, 10, 20), "bruno@email.com", "988888888", 3000);

    // Criar funcionário do banco
    const yuri = new Employee(1, "11122233344", "Yuri Fábio", new Date(1935, 1, 1), "yuri@banco.com", "977777777");

    // Abrir contas usando o funcionário
    const toffiliChecking = await yuri.openAccountCSV(toffili, 1000, "checking");
    const brunoSavings = await yuri.openAccountCSV(bruno, 500, "savings");

    console.log("Contas criadas:");
    console.log(toffiliChecking);
    console.log(brunoSavings);

    // Operações bancárias
    console.log("\n--- Operações ---");

    // Depósito
    toffiliChecking.deposit(200);
    console.log("Toffili depositou 200:", toffiliChecking.balance);

    // Saque
    brunoSavings.withdraw(100);
    console.log("Bruno sacou 100:", brunoSavings.balance);

    // Transferência
    toffiliChecking.transfer(300, brunoSavings);
    console.log("Toffili transferiu 300 para Bruno:");
    console.log("Saldo Toffili:", toffiliChecking.balance);
    console.log("Saldo Bruno:", brunoSavings.balance);

    // Tentativa de empréstimo
    const loanAmount = 1500;
    if (yuri.performLoan(toffili, toffiliChecking, loanAmount)) {
        console.log(`Empréstimo de ${loanAmount} autorizado para Toffili`);
    } else {
        console.log(`Empréstimo de ${loanAmount} negado para Toffili`);
    }
    console.log("Saldo Toffili após empréstimo:", toffiliChecking.balance);

    // Juros da poupança
    if (brunoSavings instanceof SavingsAccount) {
        brunoSavings.applyMonthlyInterest();
        console.log("Saldo Bruno após juros mensais:", brunoSavings.balance);
    }
}

main();
