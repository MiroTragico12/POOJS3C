class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

class Vendas {
    constructor() {
        this.produtosVendidos = [];
    }
    
    venderProduto() {
        const nomeProduto = prompt("Informe o nome do produto a ser vendido:");
        const quantidade = parseInt(prompt("Informe a quantidade vendida:"));

        // Procurando o produto na lista de produtos
        const produtoVendido = listaDeProdutos.find(produto => produto.nome === nomeProduto);

        if (produtoVendido) {
            if (quantidade <= produtoVendido.estoque) {
                const valorTotal = quantidade * produtoVendido.preco;
                produtoVendido.estoque -= quantidade;
                this.produtosVendidos.push({ produto: produtoVendido, quantidade: quantidade, valorTotal: valorTotal });
                console.log("Venda realizada com sucesso!");
            } else {
                console.log("Quantidade insuficiente em estoque.");
            }
        } else {
            console.log("Produto não encontrado.");
        }
    }

    listarProdutosVendidos() {
        console.log("Produtos vendidos:");
        this.produtosVendidos.forEach(item => {
            console.log(`Produto: ${item.produto.nome}, Quantidade: ${item.quantidade}, Valor Total: ${item.valorTotal}`);
        });
    }
}

// Restante do seu código aqui

