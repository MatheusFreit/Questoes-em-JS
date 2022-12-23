/*6 - Dado um valor de temperatura em Fahrenheit e sabendo que a fórmula para conversão de
Fahrenheit para Celsius é C = 5/9 (F – 32), exibir o valor da temperatura em Celsius.*/

function temperatura(n1,n2){
    if(n1=="F"||n1=="f" ){
        return (5/9*(n2-32)).toFixed(2) + "º"
    }else if(n1=="C"|| n1=="c"){
        return ((n2*9/5)+32).toFixed(2) + " F"
    }else{
    return "Por favor, informar em qual temperatura"
}}
console.log(temperatura("F",893))
console.log(temperatura("f",894))
console.log(temperatura("F",98))
console.log(temperatura("C",104.99))
console.log(temperatura("",104.99))
