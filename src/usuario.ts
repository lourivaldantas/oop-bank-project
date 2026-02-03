export class Usuario {
    private _id: number;
    private _cpf: string;
    private _name: string;
    private _birthday: Date;
    private _email: string;
    private _phone: number;

        constructor(id: number, cpf: string, name: string, birthday: Date, email: string, phone: number) {
            this.id = id;
            this.cpf = cpf;
            this.name = name;
            this.birthday = birthday;
            this.email = email;
            this.phone = phone;
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
        // Verifica se o cpf tem 11 digitos            
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

    // email
    set email(value: string) {
        this._email = value;
    }
    get email() {
        return this._email;
    }

    // phone
    set phone(value: number) {
        this._phone = value;
    }
    get phone() {
        return this._phone;
    }

    // Data de nascimento formatada (DD/MM/YYYY)
    getBirthdayFormatted(): string {
        const day = this._birthday.getDate().toString().padStart(2, '0');
        const month = (this._birthday.getMonth() + 1).toString().padStart(2, '0');
        const year = this._birthday.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
}
