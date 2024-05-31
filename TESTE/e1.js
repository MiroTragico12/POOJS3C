function pessoa (nome,idade,podeBeber){
    this.nome = nome,
    this.idade = idade,
    this.podeBeber = podeBeber

}


pessoa1 = new pessoa ('Jorge', 21, false);
pessoa2 = new pessoa ('Milena', 23, true);



if(pessoa2.podeBeber === true){
    console.log (pessoa2.nome +" tem "+pessoa2.idade+ " e ela pode beber.")
}else{

    console.log (pessoa2.nome +" tem "+pessoa2.idade+ "e ela não pode beber.")
}
