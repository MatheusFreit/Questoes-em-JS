/*7 - Dados os valores de a, b e c de uma equação do segundo grau, calcule e mostre no terminal os
valores de x’ e x’’ dessa equação.*/

function equação(n1=1,n2=1,n3=1){
    let delta = n2**2-4*n1*n3;
    console.log(`O Delta: ${delta}`)
    if(delta>=0){
    x1=((-n2+Math.sqrt(delta))/2*n1)
    
    x2=((-n2-Math.sqrt(delta))/2*n1)   
    return `O resultado x¹: ${x1} e resultado x²:${x2}` 
    }
    return `A equação não possui raiz`

}
console.log(equação(1,-5,6))