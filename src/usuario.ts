export class Usuario {
    private _id: number;
    private _cpf: string;
    private _name: string;
    private _birthday: Date;

    constructor(id: number, cpf: string, name: string, birthday: Date) {
        this.id = id;
        this.cpf = cpf;
        this.name = name;
        this.birthday = birthday;
    }

    // id
    set id(value: number) {
        this._id = value;
    }

    get id(): number {
        return this._id;
    }

    // cpf
    set cpf(value: string) {
        let counter = 0;

        for (let i = 0; i < value.length; i++) {
            if (value[i] >= '0' && value[i] <= '9') {
                counter++;
            }
        }

        if (counter !== 11) {
            throw new Error("Invalid CPF");
        }

        this._cpf = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    // name
    set name(value: string) {
        if (!value) {
            throw new Error("Invalid name");
        }
        this._name = value;
    }

    get name(): string {
        return this._name;
    }

    // birthday
    set birthday(value: Date) {
        this._birthday = value;
    }

    get birthday(): Date {
        return this._birthday;
    }

    // formatted birthday (DD/MM/YYYY)
    getBirthdayFormatted(): string {
        const day = this._birthday.getDate().toString().padStart(2, '0');
        const month = (this._birthday.getMonth() + 1).toString().padStart(2, '0');
        const year = this._birthday.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
}
