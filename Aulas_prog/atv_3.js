let preco = parseFloat(prompt("Digite o preço do produto: "));

let aVista = preco * 0.90;

let parcelas = parseInt(prompt("Digite o número de parcelas (1 a 5): "));

if (parcelas < 1 || parcelas > 5) {
    console.log("O número de parcelas deve ser entre 1 e 5.");
} else {
    console.log("O valor do produto é: R$" + preco.toFixed(2));

    if (parcelas === 1) {
        console.log("Pagamento à vista com 10% de desconto: R$" + aVista.toFixed(2));
        console.log("O produto está com 10% de desconto para pagamento à vista.");
    } else {
        let valorParcela = preco / parcelas;
        console.log("Número de parcelas: " + parcelas);
        console.log("Valor de cada parcela: R$" + valorParcela.toFixed(2));
    }
}
