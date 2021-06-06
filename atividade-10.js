function PegaVetor(){
  let vetor = [];
  let i = true
  while(i === true){
    let valor = Number(prompt('Para adicionar um valor digite um numero, para saber a media digite qualquer outra tecla:'))
    if (isNaN(valor)){
      i = false
    }else{
    vetor.push(valor)
    console.log(vetor)}
  }
  return vetor
}
function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
  }
  return indexes;
}
function checkDuplicates(){
  var vetor = PegaVetor();
  var PossuiDuplicatas = vetor.map(valor => getAllIndexes(vetor, valor).length >= 2 ? true : false);
  PossuiDuplicatas.includes(true) ? console.log('Possui Duplicatas') : console.log('Não possui duplicatas')
}
checkDuplicates();