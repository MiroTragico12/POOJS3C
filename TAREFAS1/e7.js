class Contador {
    constructor() {
        this._valor = 0;
    }

   
    zerar() {
        this._valor = 0;
    }

  
    incrementar() {
        this._valor++;
    }

  
    getValor() {
        return this._valor;
    }
}


let contador = new Contador();

console.log(contador.getValor());

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.getValor()); 

contador.zerar();

console.log(contador.getValor()); 
