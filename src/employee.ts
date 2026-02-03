import { User } from "./user";

export class Employee extends User {

    constructor(
        id: number,
        cpf: string,
        name: string,
        birthday: Date,
        email: string,
        phone: string,
    ) {
        super(id, cpf, name, birthday, email, phone);
    }
}
