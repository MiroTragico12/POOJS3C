class Object {
    constructor(largura,altura){
        this.largura =largura,
        this.altura = altura;
    }
    calculaArea(){
        
    }
}


class Triangulo extends Object{
    constructor(tipo,largura,altura){
        super(largura,altura)
        this.tipo = tipo
    }
    calculaArea(){
        let area = (this.largura * this.altura)/2;
        return console.log("A area do triangulo eh "+area);
    }
        
}

class Retangulo extends Object{
    constructor(largura,altura){
        super(largura,altura)
    }
    calculaArea(){
        let area = this.altura *this.largura;
        return console.log("A area do retangulo eh "+area);
    }
    verificaQuadrado(){
        if(this.largura === this.altura){
            return console.log("E um quadrado")
        }else(
             console.log("Nao eh um quadrado.")
        )
    }
}

const retangulo1 = new Retangulo(25,29);
const triangulo1 = new Triangulo('tipo',22,300)

triangulo1.calculaArea();
retangulo1.calculaArea();
retangulo1.verificaQuadrado();

const retangulo2 = new Retangulo(22,133);
