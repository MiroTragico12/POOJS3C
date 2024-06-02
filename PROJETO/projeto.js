const prompt = require('prompt-sync')();

class Animal{
    constructor(nome, raca, qtdPatas, cor, peso, tamanho){
        this.nome = nome,
        this.raca = raca,
        this.qtdPatas = qtdPatas,
        this.cor = cor,
        this.peso = peso, 
        this.tamanho = tamanho;
    }
    falar(){
        return null;
    }
}

class Cachorro extends Animal{
    constructor(nome, raca, qtdPatas, cor, peso, tamanho, dono){
        super(nome, raca, qtdPatas, cor, peso, tamanho, dono);
    }
    falar(){
        return console.log("AU AU AU");
    }
    cadastraCachorro(){
        const nome = prompt("\nInforme o nome do seu cachorro:");
        const raca = prompt("\nInforme a raça:");
        const cor = prompt("\nInforme a cor do seu cachorro:");
        const peso = parseFloat(prompt("\nInforme o peso do seu cachorro:"));
        const tamanho = parseFloat(prompt("\nInforme o tamanho do seu cachorro:"));
        
        const dono = new Humano();
        dono.cadastraHumano();

        const novoCachorro = new Cachorro(nome, raca, 4, cor, peso, tamanho, dono);
        listaDeCachorros.push(novoCachorro);
        console.log("Novo cachorro cadastrado com sucesso.");
    }
}

class Gato extends Animal{
    constructor(nome, raca, qtdPatas, cor, peso, tamanho, dono){
        super(nome, raca, qtdPatas, cor, peso, tamanho, dono);
    }
    falar(){
        return console.log("MIAU");
    }
    cadastraGato(){
        const nome = prompt("\nInforme o nome do seu gato:");
        const raca = prompt("\nInforme a raça:");
        const cor = prompt("\nInforme a cor do seu gato:");
        const peso = parseFloat(prompt("\nInforme o peso do seu gato:"));
        const tamanho = parseFloat(prompt("\nInforme o tamanho do seu gato:"));
        
        const dono = new Humano();
        dono.cadastraHumano();

        const novoGato = new Gato(nome, raca, 4, cor, peso, tamanho, dono);
        listaDeGatos.push(novoGato);
        console.log("Novo gato cadastrado com sucesso.");
    }
}

class Vaca extends Animal{
    constructor(nome, raca, qtdPatas, cor, peso, tamanho, dono){
        super(nome, raca, qtdPatas, cor, peso, tamanho, dono);
    }
    falar(){
        return console.log("MUUUUUUUUUUUUU");
    }
    cadastraVaca(){
        const nome = prompt("\nInforme o nome da sua vaca:");
        const raca = prompt("\nInforme a raça:");
        const cor = prompt("\nInforme a cor da sua vaca:");
        const peso = parseFloat(prompt("\nInforme o peso da sua vaca:"));
        const tamanho = parseFloat(prompt("\nInforme o tamanho da sua vaca:"));
        
        const dono = new Humano();
        dono.cadastraHumano();

        const novaVaca = new Vaca(nome, raca, 4, cor, peso, tamanho, dono);
        listaDeVacas.push(novaVaca);
        console.log("Nova vaca cadastrada com sucesso.");
    }
}

class Humano {
    constructor(nome, idade, endereco, contato) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.contato = contato;
    }

    static cadastraHumano() {
        const nome = prompt("Informe o nome do comprador:");
        const idade = parseInt(prompt("Informe a idade do comprador:"));
        const endereco = prompt("Informe o endereço do comprador:");
        const contato = prompt("Informe o contato do comprador:");

        return new Humano(nome, idade, endereco, contato);
    }
}

class Funcionario extends Humano{
    constructor(nome,idade,endereco,contato,salario){
        super(nome,idade,endereco,contato);
        this.salario = salario;
    }
    
    
}


class Balconista extends Funcionario {
    constructor(nome, idade, endereco, contato) {
      super(nome, idade, endereco, contato, 2000); 
    }
    
    static cadastraBalconista() {
        const nome = prompt("Informe o nome do balconista:");
        const idade = parseInt(prompt("Informe a idade do balconista:"));
        const endereco = prompt("Informe o endereço do balconista:");
        const contato = prompt("Informe o contato do balconista:");
        
        const novoBalconista = new Balconista(nome, idade, endereco, contato);
        listaFuncionarios.push(novoBalconista);
        console.log("Novo balconista cadastrado com sucesso.");
    }
}

class Veterinario extends Funcionario {
    constructor(nome, idade, endereco, contato) {
      super(nome, idade, endereco, contato, 5000); 
    }
    
    static cadastraVeterinario() {
        const nome = prompt("Informe o nome do veterinário:");
        const idade = parseInt(prompt("Informe a idade do veterinário:"));
        const endereco = prompt("Informe o endereço do veterinário:");
        const contato = prompt("Informe o contato do veterinário:");
        
        const novoVeterinario = new Veterinario(nome, idade, endereco, contato);
        listaFuncionarios.push(novoVeterinario);
        console.log("Novo veterinário cadastrado com sucesso.");
    }
}

class Vendedor extends Funcionario {
    constructor(nome, idade, endereco, contato) {
      super(nome, idade, endereco, contato, 3000); 
    }
    
    static cadastraVendedor() {
        const nome = prompt("Informe o nome do vendedor:");
        const idade = parseInt(prompt("Informe a idade do vendedor:"));
        const endereco = prompt("Informe o endereço do vendedor:");
        const contato = prompt("Informe o contato do vendedor:");
        
        const novoVendedor = new Vendedor(nome, idade, endereco, contato);
        listaFuncionarios.push(novoVendedor);
        console.log("Novo vendedor cadastrado com sucesso.");
    }
}

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    static vendaProd(listaDeProdutos) {
        const nome = prompt("Informe o produto:");
        const preco = parseFloat(prompt("Informe o preço unitário:"));
        const estoque = parseInt(prompt("Informe a quantidade em estoque:"));

        const novoProduto = new Produto(nome, preco, estoque);
        listaDeProdutos.push(novoProduto);

        console.log("Novo produto cadastrado com sucesso.");
    }
}



class Vendas {
    constructor(produto, comprador) {
        this.produto = produto;
        this.comprador = comprador;
    }

    static compraProd(listaDeVendas, listaDeProdutos, listaDeClientes) {
        const produto = prompt("\nInforme o produto que você deseja comprar: ");

        const foundProduct = listaDeProdutos.find(item => item.nome === produto);

        if (foundProduct) {
            const comprador = Humano.cadastraHumano();
            const novaVenda = new Vendas(foundProduct, comprador);
            listaDeVendas.push(novaVenda);

            console.log("Nova venda realizada com sucesso.");
        } else {
            console.log("Produto não encontrado.");
        }
    }
}

const listaDeProdutos = [];
const listaDeCachorros = [];
const listaDeVacas = [];
const listaDeGatos = [];
const listaDeClientes = [];
const listaFuncionarios = [];
const listaDeVendas = [];

   
    
    
while(true) {
    console.log("O que você deseja fazer?");
    console.log("0 - Sair do sistema.");
    console.log("1 - Cadastrar um cachorro no sistema.");
    console.log("2 - Cadastrar um gato no sistema.");
    console.log("3 - Cadastrar uma vaca no sistema.");
    console.log("4 - Cadastrar um novo funcionário.");
    console.log("5 - Cadastrar um novo produto.");
    console.log("6 - Realizar uma venda.");
    console.log("7 - Exibir todas as informações do sistema.");
    const escolha = parseInt(prompt("Digite o número de sua escolha: "));
    
    switch(escolha) {
        case 1:
            const novoCachorro = new Cachorro(); 
            novoCachorro.cadastraCachorro(); 
            novoCachorro.falar(); 
            listaDeCachorros.push(novoCachorro); 
            break;
        case 2:
            const novoGato = new Gato();
            novoGato.cadastraGato();
            novoGato.falar();
            listaDeGatos.push(novoGato);
            break;
        case 3:
            const novaVaca = new Vaca();
            novaVaca.cadastraVaca();
            novaVaca.falar();
            listaDeVacas.push(novaVaca);
            break;
        case 4:
            console.log("Qual tipo de funcionário deseja cadastrar?");
            console.log("1 - Cadastrar um balconista.");
            console.log("2 - Cadastrar um veterinário.");
            console.log("3 - Cadastrar um vendedor.");
            const tipoFuncionario = parseInt(prompt("Digite o número de sua escolha: "));
            switch (tipoFuncionario) {
                case 1:
                    const novoBalconista = new Balconista();
                    Balconista.cadastraBalconista(); 
                    listaFuncionarios.push(novoBalconista);
                    break;
                case 2:
                    const novoVeterinario = new Veterinario();
                    Veterinario.cadastraVeterinario();
                    listaFuncionarios.push(novoVeterinario);
                    break;
                case 3:
                    const novoVendedor = new Vendedor();
                    Vendedor.cadastraVendedor();
                    listaFuncionarios.push(novoVendedor);
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
            case 5:
                Produto.vendaProd(listaDeProdutos);
                break;
            case 6:
                Vendas.compraProd(listaDeVendas, listaDeProdutos, listaDeClientes);
                break;
            case 7:
                console.log("\nListando todos os arrays:");
                console.log("Lista de cachorros:", listaDeCachorros);
                console.log("Lista de gatos:", listaDeGatos);
                console.log("Lista de vacas:", listaDeVacas);
                console.log("Lista de clientes:", listaDeClientes);
                console.log("Lista de funcionários:", listaFuncionarios);
                console.log("Lista de produtos:", listaDeProdutos);
                console.log("Lista de vendas:", listaDeVendas);
                break;
            case 0: 
                console.log("Saindo do programa.");
                break;
            default:
                console.log("Escolha inválida. Por favor, escolha uma opção válida.");
        }
    
        if(escolha === 0) {
            break;
        }
    }