# Sistema Bancário Orientado a Objetos

## Descrição
Este projeto é um sistema de simulação de operações bancárias utilizando **Programação Orientada a Objetos**.  
Ele permite gerenciar clientes, contas (corrente e poupança) e funcionários que realizam operações sobre essas contas.  

O sistema foi desenvolvido como atividade para o curso de **Técnico Integrado em Informática – IFRN, Campus Parnamirim**, disciplina de **Programação Estruturada e Orientada a Objetos**.

---

## Tecnologias Utilizadas
| Tecnologia | Versão |
| :---: | :---: |
| Node.js | 24.13.0 |
| Npm | 11.6.2 |
| TypeScript | 5.2 |

---

## Estrutura do Projeto
```text
.
├── data # CSV de persistência de contas
├── dist # Código compilado JavaScript
├── src
│ ├── models # Classes principais
│ │ ├── user.ts
│ │ ├── client.ts
│ │ ├── account.ts
│ │ ├── checkingAccount.ts
│ │ └── savingsAccount.ts
│ └── services # Classes de serviço/funcionário
│ └── employee.ts
├── package.json
├── tsconfig.json
└── README.md
```


---

## Funcionalidades Implementadas

### Classes
- **User**: Classe abstrata com informações básicas de um usuário (id, CPF, nome, nascimento, email e telefone).  
- **Client**: Extende User, adiciona `grossIncome` (renda bruta) do cliente.  
- **Account**: Classe abstrata de conta bancária, com métodos:
  - `deposit`  
  - `withdraw`  
  - `transfer`  
  - Consulta de saldo e data de abertura formatada  
- **CheckingAccount**: Extende Account, adiciona suporte a **overdraft** (limite de cheque especial).  
- **SavingsAccount**: Extende Account, adiciona:
  - Limite de saques mensais  
  - Aplicação de juros mensais  
  - Reset do contador de saques  
- **Employee**: Extende User, permite que um funcionário:
  - Abra contas (checking ou savings)  
  - Autorize empréstimos até 30% da renda bruta do cliente  
  - Realize empréstimos credenciando o valor na conta  
  - Persistência das contas em arquivo CSV (`data/accounts.csv`)  

---

## Regras do Sistema
- Um cliente só pode ter uma conta vinculada por vez.  
- Contas podem ser **corrente** ou **poupança**.  
- Saque e transferência respeitam saldo disponível ou limite de cheque especial (corrente).  
- Poupança possui limite de saques mensais e juros aplicáveis mensalmente.  
- Funcionário pode abrir contas e realizar empréstimos, desde que autorizados.  
- Todos os métodos retornam valores apropriados (`boolean`, `number`, `Account`), **sem imprimir no console**.  

---

## Como Usar
1. Instale as dependências:
```bash
npm install
```

2. Compile o TypeScript:
```bash
tsc
```

3. Execute o programa principal:
```bash
node dist/main.js
```

4. O arquivo CSV data/accounts.csv armazena todas as contas criadas.