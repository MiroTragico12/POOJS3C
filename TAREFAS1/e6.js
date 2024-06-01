class Pesssoa {
    constructor(nome, endereco, email, telefone) {
        this._nome = nome;
        this._endereco = endereco;
        this._email = email;
        this._telefone = telefone;
    }

 
    getNome() {
        return this._nome;
    }

    getEndereco() {
        return this._endereco;
    }

    getEmail() {
        return this._email;
    }

    getTelefone() {
        return this._telefone;
    }

   
    setNome(nome) {
        this._nome = nome;
    }

    setEndereco(endereco) {
        this._endereco = endereco;
    }

    setEmail(email) {
        this._email = email;
    }

    setTelefone(telefone) {
        this._telefone = telefone;
    }
}

class Livros {
    constructor(nome, autor, numeroPaginas) {
        this._nome = nome;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
        this._dispLivro = true;
        this._pessoaAlugou = null;
    }

    getNome() {
        return this._nome;
    }

    getAutor() {
        return this._autor;
    }

    getNumeroPaginas() {
        return this._numeroPaginas;
    }

    getDispLivro() {
        return this._dispLivro;
    }

    getPessoaAlugou() {
        return this._pessoaAlugou;
    }

    setNome(nome) {
        this._nome = nome;
    }

    setAutor(autor) {
        this._autor = autor;
    }

    setNumeroPaginas(numeroPaginas) {
        this._numeroPaginas = numeroPaginas;
    }

    setDispLivro(dispLivro) {
        this._dispLivro = dispLivro;
    }

    setPessoaAlugou(pessoa) {
        this._pessoaAlugou = pessoa;
    }

    alugaLivro(pessoa) {
        if (this._dispLivro) {
            this._dispLivro = false;
            this._pessoaAlugou = pessoa;
            console.log(`O livro ${this._nome} foi alugado para a pessoa ${pessoa.getNome()}`);
        } else {
            console.log(`O livro ${this._nome} está indisponível.`);
        }
    }

    devolveLivro() {
        if (!this._dispLivro) {
            this._dispLivro = true;
            this._pessoaAlugou = null;
            console.log(`Você devolveu o livro ${this._nome}.`);
        } else {
            console.log(`O livro ${this._nome} já está disponível.`);
        }
    }
}


let pessoa1 = new Pesssoa('Jorge','Rua Habraham Haick', 'jorge.santista10@hotmail.com', '98830-8565');
let livro1 = new Livros('Rangers', 'La Fontene', 329);
let livro2 = new Livros('The Order', 'Mary Kalai', 765);
let livro3 = new Livros('SOS', 'Tyene', 126);

livro1.alugaLivro(pessoa1);
livro2.alugaLivro(pessoa1);

livro1.alugaLivro(pessoa1);
livro1.alugaLivro(pessoa1);
livro2.alugaLivro(pessoa1);
livro1.devolveLivro();
livro1.alugaLivro(pessoa1);

console.log(livro1);
console.log(livro2);
