import { User } from "./user";

export class Client extends User {
    private _grossIncome: number

        constructor(
            id: number,
            cpf: string,
            name: string,
            birthday: Date,
            email: string,
            phone: string,
            grossIncome: number,
        ) {
            super(id, cpf, name, birthday, email, phone);
            this.grossIncome = grossIncome;
        }

    // grossIncome
    public set grossIncome(value: number) {
        if (value < 0) {
            throw new Error('A renda bruta não pode ser menor que zero')
        }
        this._grossIncome = value;
    }
    public get grossIncome(): number {
        return this._grossIncome;
    }
}
