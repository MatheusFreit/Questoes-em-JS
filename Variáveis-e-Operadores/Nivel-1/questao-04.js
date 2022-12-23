/*4 - Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.*/

//toFixed -> é a quantidade de números após a vírgula. 
//Math.Pi -> é o número PI do JS. Como ele utiliza um números muito grande, coloquei o toFixed para ser somente dois númeross após vírgula. 

function circunferência(n1){
    let area= Math.PI.toFixed(2)*n1**2;
    let perimetro= (2*Math.PI.toFixed(2)*n1).toFixed(2);
    return `O tamanho da área é: ${area}, e o perímentro é: ${perimetro}`
}

console.log(circunferência(10))