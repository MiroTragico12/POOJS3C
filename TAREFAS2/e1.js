class Funcionario {
    static ultimoId = 0;

    constructor(nome, cargo, salarioBase) {
        this.id = Funcionario.proximoId();
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBase = salarioBase;
    }

    static proximoId() {
        return ++Funcionario.ultimoId;
    }

    calcularSalario() {
        console.log("O salario final do funcionario " + this.nome + " foi de " + this.salarioBase + " reais.");
    }
}

class Gerente extends Funcionario {
    constructor(nome, cargo, salarioBase, qtdColab) {
        super(nome, cargo, salarioBase);
        this.qtdColab = qtdColab;
    }

    calcularSalario() {
        let salarioGerente = this.salarioBase * 3;
        console.log("O salario do gerente " + this.nome + " é " + salarioGerente + " reais.");
    }
}

const funcionario1 = new Funcionario("João", "Gerente", 3000);
const funcionario2 = new Funcionario("Maria", "Assistente", 3000);

funcionario1.calcularSalario();
funcionario2.calcularSalario();

console.log(funcionario1);
console.log(funcionario2);

const gerente = new Gerente("Gerente", "gerente", 1000, 23);

gerente.calcularSalario();
