import { Usuario } from "./usuario";

export class Cliente extends Usuario {
    private _grossIncome: number

        constructor(
            id: number,
            cpf: string,
            name: string,
            birthday: Date,
            email: string,
            phone: number,
            grossIncome: number,
        ) {
            super(id, cpf, name, birthday, email, phone);
            this.grossIncome = grossIncome;
        }

    // Gross income
    set grossIncome(value: number) {
        this._grossIncome = value;
    }
    get grossIncome() {
        return this._grossIncome;
    }
}
