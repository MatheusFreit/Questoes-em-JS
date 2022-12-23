/*2 - Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.*/

function retangulo(n1,n2){
    let area = n1*n2;
    let perimetro = 2*(n1+n2); 
       
    return `Area: ${area}, e o Perímentro: ${perimetro}` 

}
console.log(retangulo(10,10))