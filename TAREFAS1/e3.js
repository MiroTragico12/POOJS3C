class universidade {
    constructor(nomeUni){
        this.nomeUni = nomeUni,
        this.informaNome = function(){
            console.log("voce estuda na universidade "+this.nomeUni);
        }
    }
}


class Pessoa extends universidade{
     constructor (nome,nomeUni) {
        super(nomeUni);
        this.nome = nome;
        this.informaOndeEstuda= function(){
            console.log(this.nome+" estuda na "+this.nomeUni);
        }        
    }
}

const pessoa1 = new Pessoa('jorge','campo Real')

pessoa1.informaNome();
pessoa1.informaOndeEstuda();