//9 - Faça um programa que dado três notas de um aluno, calcule e mostre no terminal a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5 respectivamente.

function mediaFinal(n1,n2,n3){
    let n4=(2+3+5)
    return "Media final: "+((n1*2+n2*3+n3*5)/n4)
}
console.log(mediaFinal(5,7,8));
console.log(mediaFinal(6,8,8));
console.log(mediaFinal(10,10,9));