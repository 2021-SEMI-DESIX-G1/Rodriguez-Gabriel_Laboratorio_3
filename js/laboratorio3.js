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
    else{
        paliningresado.value = numero;
        palinbinario.value = binario;
        palinveri.value = "No es palindromo de doble base";
    }
}
function caracter() {
    var caracteres
}
function bisiesto() {

}
function primos() {

}




