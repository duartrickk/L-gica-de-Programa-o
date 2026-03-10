// 1. Function Expression - Valor Base
const calcularMediaBase = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) /3;
}
// 2. Arrow Function - Adicionar Taxa Fixa 
const calcularmedia = (nota1) => nota1 + nota2 + nota3/3 ;
// 3. Function Declaration - Exibir Recibo
function emitirNota(Notafinal) {
    console.log("--- APROVADO---")
    console.log("A sua nota final é:  " + totalfinal.toFixed(2))
}
// 4. Execução
let valorBruto = calcularValorBase(3, 10);
let ValorComTaxa = adicionarTaxa(valorBruto);
emitirRecibo(ValorComTaxa);