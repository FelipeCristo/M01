const prompt = require('prompt-sync')();
console.clear();

let nomeJogador = prompt('Qual o seu nome? ');
const ppt = ['pedra', 'papel', 'tesoura'];


let pontoPC = 0;
let pontoPlayer = 0;
let continuar = 'sim'

do{
    let rodadas = +prompt('rodadas: ');
console.log(`Olá ${nomeJogador} nós vamos jogar ${rodadas} rodadas`);
for (let i = 0; i < rodadas; i++){
    let pcEscolha = ppt [Math.floor(Math.random() * ppt.length)] 
    let jogEscolha = +prompt('escolha um numero de 0 a 2. sendo 0 pedra,1 papel e 2 tesoura ');

    console.log(`o Computador escolheu ${pcEscolha} e você escolheu ${ppt[jogEscolha]}`);
    if (ppt[jogEscolha] === pcEscolha){
        console.log('vocês impataram');

    }else if (ppt[jogEscolha] === 'pedra' && pcEscolha === 'tesoura' ){
        console.log('Parabéns, você Ganhou');
        pontoPlayer++;

     }else if  (ppt[jogEscolha] === 'pedra' && pcEscolha === 'papel'){

        console.log('você perdeu');
        pontoPC++;

     }else if (ppt[jogEscolha] === 'papel' && pcEscolha === 'pedra') {

        console.log('Voce Ganhou');
        pontoPlayer++;

     } else if  (ppt[jogEscolha] === 'papel'  && pcEscolha ===  'tesoura'){
         console.log('você perdeu');
         pontoPC++;

     } else if  (ppt[jogEscolha] === 'tesoura' && pcEscolha === 'pedra' ){
         console.log('voce perdeu');
         pontoPC++;
           
     }else if (ppt[jogEscolha] === 'tesoura' && pcEscolha === 'papel'){
        console.log('voce Ganhou');
        pontoPlayer++;
     } continuar = prompt('Vamos Jogar de Novo?');
     continuar = continuar.toLowerCase();

}

}while ( continuar === "sim");

console.log(`Pontuação final ficou assim:\n Seus pontos:${pontoPlayer} \n Pontuação do Computador: ${pontoPC}`);
if (pontoPlayer > pontoPC){
    console.log('Parabens você gahou o jogo');
}else if(pontoPlayer < pontoPC){
    console.log('Sinto muito, mas você perdeu');
}else{
    console.log('legal você impatou com uma maquina');
}