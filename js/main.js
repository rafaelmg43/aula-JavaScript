 function clicou(){
     document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"
     //console.log(document.getElementById("agradecimento"));
     //alert("obrigado por tentar")
 }

 function redirecionar(){
     window.open("https://github.com/rafaelmg43/aula-JavaScript");//abre em uma nova aba
     //window.location.href = "https://github.com/rafaelmg43/aula-JavaScript";//abre na mesma aba
 }

 function trocar(elemento){
     //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse aqui";
     elemento.innerHTML = "obrigado por passar o mouse aqui";
     //alert("trocar texto")
 }

  function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
      elemento.innerHTML = "passe o mouse aqui";//modo mais facil para trocar mensagem ao passar mouse
  }

  function load(){//carrega a pagina inicial com uma mensagem
      alert("pagina carregada");
  }

  function funcaochange(elemento){//onchange sempreqeu se troca o valor ele armazena o valor trocado
      console.log(elemento.value)

  }

/* exemplo function 1
function soma(n1, n2){
    return n1 + n2;
}
alert (soma(5, 10));
*/

/*exemplo de funções 2
function validaidade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
 var idade = prompt("qual sua idade");
 console.log(validaidade(idade));
*/

/* funções exemplo 3
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("vai japão", "japão", "brasil"));
*/


/*
data
Date
var d = new Date();
alert(d.getFullYear())
alert(d.getMonth())
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
alert(d.getSeconds())
*/
/*
//estrutura de repetição
exemplo 2

var count;
for(count 0; count <=5; count++){
    alert(count);
};
*/

/*
exemplo 1
var count =0;
while(count <=5){
    console.log(count);
    count++;
};
*/

/*condicionais if/else
var idade = prompt("qual a sua idade?");//prompt faz uma pergurta ao usuario 
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];//lista de DICIONARIO
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"};// DICIONARIO
console.log(fruta.nome);
alert(fruta.cor);
*/



//var lista = ["maça", "pêra", "laranja"];

//lista.push("uva");//push coloca 
//lista.pop();//retira
//console.log(lista[0]);// array 
//console.log(lista.toString()[0]);//imprime uma letra da string
//console.log(lista.join(" * "));//muda os espacamentos e caracteres da string
//console.log(lista.reverse());//inverte os itens da listados
//console.log(lista.length);//tamanho da lista
//console.log(lista);//lista os produtos
//console.log(lista[1]);//mostra apenas o item pedido
//alert(lista[1]);

//var nome = "Rafael Santos ";
//var idade = 29;//*mutiplicar +soma -subritrair
//var idade2 = 10;
//var frase = "japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2)
//console.log(frase.replace("japão", "brasil"));
//alert(frase.replace("japão", "brasil"));
//console.log(frase.toUpperCase);
//console.log(frase.tolowercase);