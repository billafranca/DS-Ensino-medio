    let numeros;
    do {
        numeros = parseInt(prompt("digite um número: "));
        if (numeros < 0 || numeros > 100) {
            console.log("apenas entre 0 e 100");
    }
    } while (numeros < 0 || numeros > 100);

    let vizinhos = numeros - 1;
    let vizinho2 = numeros + 1;

    console.log("O vizinho anterior de ", numeros, " é: " + vizinhos);
    console.log("O vizinho sucessor de ", numeros, " é: " + vizinho2);
