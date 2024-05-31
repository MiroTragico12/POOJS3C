 function Pessoa(nome, idade, sexo, etnia, cpf){
this.nome = nome,
this.idade = idade,
this.sexo = sexo, 
this.etnia = etnia,
this.cpf = cpf
}


var pessoa1 =  new Pessoa('Jorge', 19, 'masculino', 'negro', 12345678901);

console.log(pessoa1.nome +" tem "+pessoa1.idade+" anos, é do sexo " +pessoa1.sexo+ ", ele se considera "+pessoa1.etnia+
" e o seu cpf é "+pessoa1.cpf
)