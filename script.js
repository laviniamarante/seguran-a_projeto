function Hash(texto) {
    // 1. Converter caracteres para códigos ASCII
    let valores = [];
    for (let i = 0; i < texto.length; i++) {
        valores.push(texto.charCodeAt(i));
    }

    // 2. Somatório ponderado
    let h1 = 0;
    for (let i = 0; i < valores.length; i++) {
        h1 += valores[i] * (i + 1);
    }

 // 3. Soma dos quadrados dos valores ASCII
let h2 = 0;
for (let i = 0; i < valores.length; i++) {
    h2 += valores[i] * valores[i];
}

    // 4. Soma dos resultados anteriores
    let h3 = (h1 << 2) + h2;

    // 5. Elevação ao quadrado e redução
    let h4 = (h3 * h3) % 1000000000;

    // 6. Conversão para base 36 (letras + números)
    let hash = h4.toString(36);

    // 7. Completar até 25 caracteres fixos
    while (hash.length < 25) {
        hash += ((h4 + hash.length) % 36).toString(36);
    }

    return hash.substring(0, 25);
}

// Exemplo
console.log(Hash("Lavínia"));
console.log(Hash("paralelepípedo"));
