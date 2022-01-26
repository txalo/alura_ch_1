/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const $btnEncriptar = document.querySelector("#btn-encriptar");
const $btnDesencriptar = document.querySelector("#btn-desencriptar");
const $txtEntrada = document.querySelector("#txt-entrada");


  
function encriptar(mensaje) {
  let mensajeCodificado = mensaje;
  for (let clave of codigo) {
    mensajeCodificado = mensajeCodificado.replaceAll(clave[0], clave[1]);
  }

  return mensajeCodificado;
}

function desencriptar(mensaje) {
  let mensajeCodificado = mensaje;
  for (let i = codigo.length - 1; i >= 0; i--) {
    mensajeCodificado = mensajeCodificado.replaceAll(
      codigo[i][1],
      codigo[i][0]
    );
  }

  return mensajeCodificado;
}
/*
console.log("Banana = " + encriptar("banana"));
console.log(
  desencriptar(
    "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
  )
);
*/

function validarTexto (texto){
  // /[a-z]+/g
  let regAcentos = new RegExp(/[áéíóú]+/g)
  let regMayusculas = new RegExp(/[A-Z]+/g)
  return (texto.search(regAcentos) == -1 && texto.search(regMayusculas) == -1)
}

console.log ("hOla " + validarTexto("hOla"));
console.log ("hola " + validarTexto("hola") );
console.log ("hóla " + validarTexto("hóla") )
$btnEncriptar.addEventListener("click", () => { if (validarTexto($txtEntrada.value)) console.log(encriptar($txtEntrada.value))});

