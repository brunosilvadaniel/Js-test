function CalcularImc(){
  var kilos = Number(prompt('Quantos quilos você pesa?'))
  console.log(kilos)
  var metros = Number(prompt('Quantos metros você tem?'))
  console.log(metros)
  var centimetros = Number(prompt('Quantos centimetros você tem?'))
  console.log(centimetros)

  var altura = (metros * 100 + centimetros) / 100;
  console.log(altura)

  var imc = kilos / (altura * altura);

  if(imc < 20){
    alert('Você esta abaixo do peso!');
  } 
  else if(imc >20 && imc <= 25){
    alert("Peso Ideal");
  }
  else if(imc >25 && imc <= 30){
    alert("Sobrepeso");
  }
  else if(imc >30 && imc <= 35){
    alert("Obesidade Moderada");
  }
  else if(imc >35 && imc <= 40){
    alert("Obesidade Severa");
  }
  else if(imc >40 && imc <= 50){
    alert("Obesidade Morbida");
  }
  else{
    alert('Gordo');
  }
}

CalcularImc();