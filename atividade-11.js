function CalcularNotas(){
  var valor = Number(prompt('Valor a ser sacado(Obs: Somente aceito multiplos de 10):'))
  let valorIsValid = true;
  valor%10 === 0 ? valorIsValid = true : valorIsValid = false
  if(valorIsValid === true){
  let nota100 = parseInt(valor/100);
  let resto = valor%100;
  let nota50 = parseInt(resto/50);
  resto = resto%50;
  let nota20 = parseInt(resto/20);
  resto = resto%20;
  let nota10 = parseInt(resto/10);
  console.log(`Retirando `+ nota100+` de R$100,00, `+ nota50 +` de R$50,00, `+ nota20 +` de R$20,00, `, + nota10 +` de R$10,00.`)
  }
  else{
    alert('Valor Invalido!')
    CalcularNotas()
  }
}

CalcularNotas();