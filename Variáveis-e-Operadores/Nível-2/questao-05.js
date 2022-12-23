/*5 - Dados dois números inteiros, exibir o quociente e o resto da divisão inteira entre eles*/

function divisão(n1,n2){
    let quociente = (n1/n2);
    let resto=(n1%n2);
    return `O dividendo ${n1}, contém ${n2} vezes o quociente ${quociente}, e o resto é ${resto}.  `
}

console.log(divisão(30,5))