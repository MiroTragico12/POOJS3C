const prompt=require('prompt-sync')();


class produto{
    constructor(nomeProduto,estoqueProduto,precoProduto){
        this.nomeProduto = nomeProduto,
        this.estoqueProduto = estoqueProduto;
        this.precoProduto = precoProduto;
    }
}

class Pedido extends produto{
    constructor(qtdPedido,nomeProduto,estoqueProduto,formaPagamento){
        super(nomeProduto,estoqueProduto,precoProduto),
        this.qtdPedido = qtdPedido,
        this.formaPagamento =formaPagamento;
        this.pedidoItem = function(){
            if(this.qtdPedido > this.estoqueProduto){
                return console.log("nao temos estoque o suficiente.")
            }else{
            var pedidoFinal = this.qtdPedido *  this.precoProduto;
            if(this.formaPagamento==='cartao'){
                return  console.log("voce pagou em cartao. o valor final foi de"+pedidoFinal)
            }else if(this.formaPagamento==='cheque'){
                return  console.log("voce pagou em cheque. o valor final foi de"+pedidoFinal)
            }else if(this.formaPagamento=== 'dinheiro'){
                return  console.log("voce pagou em dinheiro. o valor final foi de"+pedidoFinal)
            }
        }
        }
    }
}

const nomeProduto = prompt("Digite o nome do produto: ");
const estoqueProduto = parseInt(prompt("Digite o estoque do produto: "));
const precoProduto = parseFloat(prompt("Digite o preço do produto: "));
const qtdPedido = parseInt(prompt("Digite a quantidade do pedido: "));
const formaPagamento = prompt("Digite sua forma de pagamento (dinheiro/cheque/cartao): ");

const pedido1 = new Pedido(qtdPedido, nomeProduto, estoqueProduto, formaPagamento);
pedido1.pedidoItem();