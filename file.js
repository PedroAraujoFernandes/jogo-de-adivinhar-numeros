let botao = document.getElementById("botao");
let texto = document.getElementById("texto");
let vai = document.getElementById("vai");
let dois = document.getElementById("doistexto");
let tentativas = 10;


let numero = Math.floor(Math.random(1) * 100);

function tudo(){
tentativas --;

dois.innerHTML = "tentativas " + tentativas;
let campo = document.getElementById("campo").value;
console.log(numero);

if(tentativas <= 0){
  texto.innerHTML = "você perdeu";
  dois.innerHTML = " ";
  
}else{
  
//comparação com o numero sortido
if(campo == numero){
texto.innerHTML = "acertou!, o numero é " + numero;
console.log(numero);
tentativas = 10;

}

//ivalidação de numeros inferiores ou iguais a zero com 
else if(campo <= 0 || campo >= 100){
  texto.innerHTML = "este numero não é valido.";
  console.log("o valor é invalido");
}

//condição de caso o numero seja maior que o numero sortido
else if(campo > numero){
  texto.innerHTML = "chutou alto" + campo;
}

//condição caso o numero seja menor que o numero sortido
else if(campo < numero){
  texto.innerHTML = "chutou baixo" + campo;
}

//invalidação de qualquer caractere que não seja numero
else{
  console.log();
  texto.innerHTML = "o valor é invalido";
}

}
}

campo.onfocus = function(){campo.value = " ";}

