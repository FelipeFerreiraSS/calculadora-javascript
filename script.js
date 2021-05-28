function insert(num){
  let numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
  document.getElementById('resultado').innerHTML = ""
  document.getElementById('resumo').innerHTML = ""

}

function back() {
  let menosUm = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = menosUm.substring(0, menosUm.length -1) 
}

function calcular() {
  let resultado = document.getElementById('resultado').innerHTML
  if(resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
    document.getElementById('resumo').innerHTML = resultado + "="
  }
} 