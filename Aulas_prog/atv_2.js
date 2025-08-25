let valorConta = parseFloat(prompt("digite o valor da conta: "));
let numeroCliente = parseInt(prompt("digite o total de clientes nesta conta: "));

let div = valorConta / numeroCliente;

console.log('o valor da conta é: ' + valorConta);
console.log("com a divisão de " + numeroCliente + " clientes, o valor para cada fica:  " + div.toFixed(2));