const prompt=require('prompt-sync')();

class Pesssoa{
    constructor(nome,endereco,email,telefone){
        this.nome = nome,
        this.endereco = endereco,
        this.email = email,
        this.telefone = telefone;
    }
}

class Livros {
constructor(nome,autor,numeroPaginas){
    this.nome = nome,
    this.autor = autor,
    this.numeroPaginas = numeroPaginas,
    this.dispLivro = true,
    this.pessoaAlugou = null;
}   
    alugaLivro(pessoa){
        if(this.dispLivro){
            this.dispLivro=false;
            this.pessoaAlugou = pessoa;
            console.log("O livro "+this.nome+" foi alugado para a pessoa "+pessoa.nome);
        }else{
            console.log("O livro "+this.nome+" esta indisponivel.")
        }
    }
    devolveLivro(){
        if(!this.dispLivro){
            delete this.pessoaAlugou;
            this.dispLivro=true;
            console.log("voce devolveu o livro "+this.nome);
        }else{
            console.log("O livro "+this.nome+" ja esta dispnivel.")
        }
    }
}


let pessoa1 = new Pesssoa('Jorge','Rua Habraham Haick', 'jorge.santista10@hotmail.com', '98830-8565');
let livro1 = new Livros ('Rangers','La Fontene', 329);
let livro2 = new Livros ('The Order','Mary Kalai', 765);
let livro3 = new Livros ('SOS','Tyene', 126);
livro1.alugaLivro(pessoa1);
livro2.alugaLivro(pessoa1);

livro1.alugaLivro(pessoa1);
livro1.alugaLivro(pessoa1); 
livro2.alugaLivro(pessoa1); 
livro1.devolveLivro();
livro1.alugaLivro(pessoa1);


console.log(livro1);
console.log(livro2);