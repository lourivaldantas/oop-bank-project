export abstract class User {
    protected _id: number;
    protected _cpf: string;
    protected _name: string;
    protected _birthday: Date;
    protected _email: string;
    protected _phone: string;

        constructor(id: number, cpf: string, name: string, birthday: Date, email: string, phone: string) {
            this.id = id;
            this.cpf = cpf;
            this.name = name;
            this.birthday = birthday;
            this.email = email;
            this.phone = phone;
        }

    // id
    public set id(value: number) {
        this._id = value;
    }
    public get id(): number {
        return this._id;
    }

    // cpf
    public set cpf(value: string) {
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
    public get cpf(): string {
        return this._cpf;
    }

    // name
    public set name(value: string) {
        if (!value) {
            throw new Error("Invalid name");
        }
        this._name = value;
    }
    public get name(): string {
        return this._name;
    }

    // birthday
    public set birthday(value: Date) {
        this._birthday = value;
    }
    public get birthday(): Date {
        return this._birthday;
    }

    // email
    public set email(value: string) {
        this._email = value;
    }
    public get email() {
        return this._email;
    }

    // phone
    public set phone(value: string) {
        this._phone = value;
    }
    public get phone() {
        return this._phone;
    }

    // Data de nascimento formatada (DD/MM/YYYY)
    public getBirthdayFormatted(): string {
        const day = this._birthday.getDate().toString().padStart(2, '0');
        const month = (this._birthday.getMonth() + 1).toString().padStart(2, '0');
        const year = this._birthday.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
}
