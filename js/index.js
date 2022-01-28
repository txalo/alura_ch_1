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
const $btnCopiar = document.querySelector("#btn-copiar");
const $txtEntrada = document.querySelector("#txt-entrada");
const $txtSalida = document.querySelector("#txt-salida");
const $error = document.querySelector("#error");



  
function encriptar(mensaje) {
  let mensajeCodificado = mensaje;
  for (let clave of codigo) {
    mensajeCodificado = mensajeCodificado.replaceAll(clave[0], clave[1]);
  }

  return mensajeCodificado;
}

function desencriptar(mensaje) {
  let mensajeCodificado = mensaje;
  for (let clave of codigo) {
    mensajeCodificado = mensajeCodificado.replaceAll(clave[1], clave[0]);
  }
  return mensajeCodificado;
}

function validarTexto (texto){
  let regMin = new RegExp("^[a-z ]+$")
  return (regMin.exec(texto.trim())) ? true : false
}

function mostrarMensaje (mensaje){
  $txtSalida.querySelector("#resultado").innerHTML = 
  ` <p>
      ${mensaje}
    </p>    
  `
  $btnCopiar.classList.remove("disabled");
}

function copiar() {
  let rng = document.createRange();
  rng.selectNode($txtSalida);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(rng);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

$btnEncriptar.addEventListener("click", () => { 
  $error.className = "oculta"  
  if (validarTexto($txtEntrada.value)) 
    mostrarMensaje (encriptar($txtEntrada.value))
  else
    $error.className = "visible"
});

$btnDesencriptar.addEventListener("click", () => { 
  $error.className = "oculta"
  if (validarTexto($txtEntrada.value)) 
    mostrarMensaje (desencriptar($txtEntrada.value))
  else
    $error.className = "visible"
});

$btnCopiar.addEventListener("click", () => {
  if (!$btnCopiar.classList.contains ("disable"))
    copiar();
})

