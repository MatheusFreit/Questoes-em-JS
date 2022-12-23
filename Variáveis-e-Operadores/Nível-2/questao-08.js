/*8 - Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um programa que dado o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido, calcule e mostre no terminal o salário final do vendedor. */

function revendedora(salariofixo,comissao,carrovendido,valordavendas){
    return salariofixo+(comissao*carrovendido)+(0.05*valordavendas);
}
console.log("salario final: R$",revendedora(1212,100,3,5000));//resposta: 1762
console.log("salario final: R$",revendedora(5000,100,3,20000));//resposta: 6300