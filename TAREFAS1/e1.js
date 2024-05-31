 class Pessoa{
    function(nome,idade,diaNascimento,mesNascimento,anoNascimento){
    this.nome = nome,
    this.idade = idade,
    this.diaNascimento = diaNascimento,
    this.mesNascimento = mesNascimento,
    this.anoNascimento = anoNascimento,
    this.calcularIdade = function(){
    
        const dataAtual = new Date();
    
        diaAtual = dataAtual.getDate();
        mesAtual = dataAtual.getMonth()+1;
        anoAtual = dataAtual.getFullYear();
        
        let idade = anoAtual - this.anoNascimento;
        if (mesAtual < this.mesNascimento || (mesAtual === this.mesNascimento && diaAtual < this.diaNascimento)) {
            idade--;
        }
        return idade
    },

    this.informaIdade= function(){
        console.log(this.calcularIdade());
    
    },
    this.informaNome = function(){
        console.log(this.nome);
    },
    this.ajustaDataNascimento = function (dia, mes, ano){
        this.diaNascimento = dia,
        this.mesNascimento = mes,
        this.anoNascimento = ano;
    }
    
}
}


pessoa1 = new Pessoa('jorge', null, 20,6,2000);
pessoa1.ajustaDataNascimento(10,10,2009);

pessoa2 = new Pessoa('Milena',null,16,10,1999);

console.log(pessoa1.diaNascimento); 
console.log(pessoa1.mesNascimento); 
console.log(pessoa1.anoNascimento); 
pessoa1.informaIdade();
pessoa1.informaNome();


pessoa2.informaIdade();
pessoa2.informaNome();