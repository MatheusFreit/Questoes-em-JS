/*3 - Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.*/

function quadrado(n1){
    let area = n1**2 ;
    let perimetro =4*n1 ;

    return `O tamanho da área é: ${area}, e o perímentro é: ${perimetro}`
}
console.log(quadrado(16))