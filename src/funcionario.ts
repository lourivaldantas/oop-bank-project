import { Usuario } from "./usuario";

export class Funcionario extends Usuario {

    constructor(
        id: number,
        cpf: string,
        name: string,
        birthday: Date,
        email: string,
        phone: number,
    ) {
        super(id, cpf, name, birthday, email, phone);
    }
}
