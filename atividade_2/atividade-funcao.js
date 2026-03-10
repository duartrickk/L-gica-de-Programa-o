const calcularMedia = function(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3)/3
}
function emitirNota (media){
    console.log ("A nota do aluno é: "  + media.toFixed(2)) 
    if (media >= 7)
        console.log ("O aluno foi Aprovado!!")
    else
        console.log ("O aluno foi Reprovado!! :(")
}
emitirNota (calcularMedia (0, 7, 0))