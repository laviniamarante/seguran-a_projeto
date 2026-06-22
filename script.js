function Hash(texto) {
    let valores = [];
    for (let i = 0; i < texto.length; i++) {
        valores.push(texto.charCodeAt(i));
    }

    let h1 = 0;
    for (let i = 0; i < valores.length; i++) {
        h1 += valores[i] * (i + 1);
    }

let h2 = 0;
for (let i = 0; i < valores.length; i++) {
    h2 += valores[i] * valores[i];
}

    let h3 = (h1 << 2) + h2;

    let h4 = (h3 * h3) % 1000000000;

    let hash = h4.toString(36);

    while (hash.length < 25) {
        hash += ((h4 + hash.length) % 36).toString(36);
    }

    return hash.substring(0, 25);
}

console.log(Hash("Lavínia"));
console.log(Hash("paralelepípedo"));
