function mediaTresValores(){
  var a = Number(prompt('Digite o primeiro valor:'))
  console.log(a)
  var b = Number(prompt('Digite o segundo valor:'))
  console.log(b)
  var c = Number(prompt('Digite o terceiro valor:'))
  console.log(c)

  let media = (a + b + c)/3;
  console.log(media)
}

mediaTresValores();
  
function Soma(){
  let soma = 0
  for(let j in Valores){
   soma += Valores[j]
  }
  return soma;
}

function mediaVariosValores(){ 
  let Valores = [];
  let i = true
  while(i === true){
    let valor = Number(prompt('Para adicionar um valor digite um numero, para saber a media digite qualquer outra tecla:'))
    if (isNaN(valor)){
      i = false
    }else{
    Valores.push(valor)
    console.log(Valores)}
  }
  let soma = 0
  for(let j in Valores){
    soma += Valores[j]
  }
  let media = soma/Valores.length
  console.log(`A media dos valores digitados é: `+ media.toFixed(2)) 
}
mediaVariosValores();