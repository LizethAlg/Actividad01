//Descripcion: Actividad01 Ejercicio4
// Escribe un programa que pida una frase y escriba:(30Pts)
// Cuantas veces aparece la letra “o”. Ejemplo Hola → 1
// Las vocales que aparecen. Ejemplo Hola → 2
// Cuántas veces aparecen cada una de las vocales.Ejemplo Hola → o:1 , a:1

function contarLetraO(frase) {
    var contadorO = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] === 'o' || frase[i] === 'O') {
            contadorO++;
        }
    }
    return contadorO;
}

function contarVocales(frase) {
    var contadorVocales = 0;
    for (var i = 0; i < frase.length; i++) {
        var letra = frase[i].toLowerCase();
        if ('aeiou'.includes(letra)) {
            contadorVocales++;
        }
    }
    return contadorVocales;
}

function contarVocalesIndividuales(frase) {
    var contadorVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    for (var i = 0; i < frase.length; i++) {
        var letra = frase[i].toLowerCase();
        if ('aeiou'.includes(letra)) {
            contadorVocales[letra]++;
        }
    }
    return contadorVocales;
}

function mostrarResultados(frase) {
    var resultado = document.getElementById("resultados");
    var letraO = contarLetraO(frase);
    var totalVocales = contarVocales(frase);
    var contadorVocales = contarVocalesIndividuales(frase);

    resultado.innerHTML = "<p>Veces que aparece la letra 'o': " + letraO + "</p>";
    resultado.innerHTML += "<p>Número total de vocales: " + totalVocales + "</p>";
    resultado.innerHTML += "<p>Cada vocal y su cantidad de apariciones:</p>";
    resultado.innerHTML += "<ul>";
    for (var vocal in contadorVocales) {
        resultado.innerHTML += "<li>" + vocal + ": " + contadorVocales[vocal] + "</li>";
    }
    resultado.innerHTML += "</ul>";
}

var fraseUsuario = prompt("Introduce una frase:");
mostrarResultados(fraseUsuario);