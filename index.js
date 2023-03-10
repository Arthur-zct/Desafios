// 1
let INDICE = 13
let SOMA = 0
let K = 0

while(K < INDICE) {
    K++
    SOMA = SOMA + K;
}

console.log(SOMA);




//2
function FibonacciVerificacao(num) {
    let NumFibonacci = [0,1];
    let NumAtual = 0;
    for(let x = 2; NumAtual < num; x++){
        NumFibonacci[x] = NumFibonacci[(x-1)] + NumFibonacci[(x-2)]
        NumAtual = NumFibonacci[x]
    }
    if(NumFibonacci.indexOf(num) == -1){
        console.log("O numero não pertence a sequencia de Fibonacci")
    } else { 
        console.log("O numero pertence a sequencia de Fibonacci")
    }
}

FibonacciVerificacao(35)




//5
function inverter(string){
    let Letras = string.length;
    let LetraAtual = Letras -1;
    let Invertido = "";
    let x = 0
    while(x < Letras){
        Invertido += string[LetraAtual]
        x++
        LetraAtual--
    }
    console.log(Invertido)
}
inverter("pao")


