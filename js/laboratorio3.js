document.getElementById("palinboton").addEventListener("click", palindromo);
document.getElementById("caractboton").addEventListener("click", caracter);
document.getElementById("bisiboton").addEventListener("click", bisiesto);
document.getElementById("primosboton").addEventListener("click", primos);
function palindromo() {
    var numero = parseInt(document.getElementById("palinin").value);
    var binario = numero.toString(2);
    var caracteres = 0;
    var invertida1 = "";
    var invertida2 = "";
    caracteres = numero.toString().length;
    while (caracteres > 0) {
        caracteres = caracteres - 1;
        invertida1 = invertida1 + numero.toString().charAt(caracteres);
    }
    caracteres = binario.length;
    while (caracteres > 0) {
        caracteres = caracteres - 1;
        invertida2 = invertida2 + binario.charAt(caracteres);
    }
    if ((invertida1 == numero) && (invertida2 == binario)) {
        paliningresado.value = numero;
        palinbinario.value = binario;
        palinveri.value = "Si es palindromo de doble base";
    }
    else {
        paliningresado.value = numero;
        palinbinario.value = binario;
        palinveri.value = "No es palindromo de doble base";
    }
}
function caracter() {
    document.getElementById('resultado').innerHTML = "";
    const cadena = document.getElementById("caractin").value.trim().split('');
    const repetidas = {};
    cadena.forEach(letra => {
        repetidas[letra] = (repetidas[letra] || 0) + 1;
    });
    for (let letra in repetidas) {
        document.getElementById('resultado').innerHTML += `${letra} = ${repetidas[letra]}<br>`;
    }
}
function bisiesto() {
    var año = parseInt(document.getElementById("bisiin").value);
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        bisiresp.value = "es biciesto";
    }
    else {
        bisiresp.value = "no es biciesto";
    }
}
function primos() {
    var numeros = parseInt(document.getElementById("primosin").value);
    var numerosPrimos = 1;
    if(numeros >= 1 && numeros <= 1000000) {
        document.getElementById('primosval').innerHTML = "";
        for (let c = 2; c <= numeros; c++) {
            if (primo(c)) {
                numerosPrimos = numerosPrimos + c;
            }
        }
        function primo(numero) {
            for (var i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    return false;
                }
            }
            return numero !== 1;
        }
        primosresp.value = numerosPrimos;
    }
    else {
        document.getElementById('primosval').innerHTML = "Ingrese un numero entre 1 - 1000000";
    }
}