// const prompt = require ('prompt-sync')();
// console.clear();

// let inimigoKill= 0;
// let dias

// let horace = {//esta funcionando
//     nivel: 1,
//     forca: 15,
//     hp: 150,
//     stm: 100,
//     moedas: 100,
//     avancaNivel: function () { ///////////////// teste que deu errado
//         this.nivel ++;
//         this.forca += 5;
//         this.hp += 20;
            
//     },
//     ganhoMoeda: function () {
//         let randMoedas = Math.floor(Math.random() * 101);
//         this.moedas += randMoedas
//         //return horace.moedas

//     },
//     escolhas: function(){
//         if(acao === 1){
//             this.stm -= 20

//         }

//     }

// }





// let tempo = {
//     dia: 1,
//     hora: 7,

//     // GET (pega as propriedades)
//     exibeTempo: function(){
//         console.log(`Agora é ${this.hora} horas do dia ${this.dia} de sua jornada.`)
//     },

//     // SET (altera as propriedades)
//     passaTempo: function(tempo){
//         this.hora += tempo
//         if (this.hora >= 24){
//             this.dia++
//             this.hora -= 24;
//         }
//     },

//     passaTempoDormir: function(tempo){
//         this.hora += tempo

//         if (this.hora >= 24){
//             console.log('Você dormiu e foi para o próximo dia.')
//             this.dia++
//             this.hora = 7;
//         }
//     }
// }


// console.log(`Escolha sua ação:
// 1 - Estudar (1 hora)
// 2 - Jogar video-game (8 horas)
// 3 - Trabalhar (3 horas)`);
// let escolha = +prompt();

// if (escolha == 1){
//     tempo.passaTempo(1);
// } else if (escolha == 2){
//     tempo.passaTempo(8);
// } else if (escolha == 3){
//     tempo.passaTempo(3);
// }




// tempo.exibeTempo();

// console.log(); 


















// // function ganhoMoeda(){
// //     let randMoedas = Math.floor(Math.random() * 101);
// //     horace.moedas += randMoedas
// //     return horace.moedas
// // }



// /*também funcionando
// function nivelup(){
//     horace.nivel ++;
//     horace.forca = horace.forca + 5;
//     horace.hp = horace.hp + 20;

// }*/

// let estradaDoRei1a10 = {
//     ladrao: {
//         ataque: 20,
//         hp: 100},
    
//     Brigao:{
//         ataque: 40,
//         hp: 60},

//     soldadoBebado:{
//         ataque: 25,
//         hp: 200},

//     maltrapilho:{
//         ataque: 30,
//         hp: 50},

//     assassino: {
//         ataque: 150,
//         hp: 10},
// };




// let trilhaDaFloresta11a25 = [
    
//     DoendeDaFloresta ={
//         ataque: 50,
//         hp: 70},

//     morcegoGigante  ={
//         ataque: 10,
//         hp: 400},

//     Troll  ={
//         ataque: 80,
//         hp: 500},

//     guerreiroInvasor ={
//         ataque: 90,
//         hp: 200},

//     Barbaro ={
//         ataque: 60,
//         hp: 170},
//     ];

// let pantano26a39 = [

//     monstroDeAreia ={
//         ataque: 120,
//         hp: 400},
    
//     elementalDeFogo ={
//         ataque: 130,
//         hp: 350},
    
//     elementalDaAgua ={
//         ataque: 150,
//         hp: 300},
            
//     elementalDoAr ={
//         ataque: 80,
//         hp:280 },
    
//     monstroDeLama ={
//         ataque: 100,
//         hp: 500},
    
//     salgueiAnciao ={
//         ataque: 10,
//         hp: 5000},
    
//     bruxoElemental ={
//         ataque: 100,
//         hp: 2000},

// ];

// let acampamentoOrc40a59 = [

//     guerreiroOrc ={
//         ataque: 250,
//         hp: 500},
    
//     OrcAnciao ={
//         ataque: 100,
//         hp: 700},
    
//     OrcArqueiro ={
//         ataque: 300,
//         hp: 200},
            
//     chefeOrc ={
//         ataque: 300,
//         hp: 4000},
    
//     orcCinzento ={
//         ataque: 350,
//         hp: 600},
    
//     guardaOrc ={
//         ataque: 200,
//         hp: 400},
    
//     orcXama ={
//         ataque: 250,
//         hp: 300},

// ];

// let floresta60a79 = [

//     Driad ={
//         ataque: 400,
//         hp: 500},
    
//     ladraoFurtivo ={
//         ataque: 1000,
//         hp: 10},
    
//     anaconda ={
//         ataque: 450,
//         hp: 480},
            
//     centauroArqueiro ={
//         ataque: 800,
//         hp: 200},
    
//     gigante ={
//         ataque: 500,
//         hp: 10000},
    
//     tarantulaGigante ={
//         ataque: 600,
//         hp: 800},
    
//     grandeEscorpiao ={
//         ataque: 650,
//         hp: 700},

// ];

// let montanhaDaMorte80a100 = [

//     giganteDeRocha ={
//         ataque: 300,
//         hp: 15000},
    
//     pequenoMonstroDeLava ={
//         ataque: 450,
//         hp: 2000},
    
//     fogoFantasmagorico ={
//         ataque: 5,
//         hp: 50000},
            
//     ImpDeFogo ={
//         ataque: 500,
//         hp: 1500},
    
//     dragãoDeFogoFilhote ={
//         ataque: 700,
//         hp: 3000},
    
//     dragãoDeFogoJovem ={
//         ataque: 1000,
//         hp: 6000},
    
//     TemivelDragaoDeFogo ={
//         ataque: 2000,
//         hp: 20000},

// ];

// /*


//  PRECISA CORRIGIR

// */


//  /*

//  ////////FUNCIONANDO
// console.log(horace);
// console.log();
// nivelup();
// console.log(horace);
// /*
// /*NÃO ESTA FUNCIONANDO
// ganhoMoeda();
// console.log(horace);
// ganhoMoeda();
// console.log(horace);
// ganhoMoeda();
// console.log(horace);
// ganhoMoeda();
// console.log(horace);
// ganhoMoeda();
// console.log(horace);
// ganhoMoeda();
// console.log(horace);*/


// // console.log('\tOlá aventureiro! Seja bem-vindo. Hoje vamos entrar em um mundo de aventura e fantasia, onde temos como objetivo a evolução de seu personagem e sua sobrevivência, para conseguir prosseguir sua jornada que cada dia que passa tende a ficar cada vez mais desafiadora.\n\n\tVocê nessa aventura controlará o destino de um Cavaleiro livre chamado Horace. Que precisa fazer uma viajem perigosa de 1.000 Km até o seu destino. Tendo que se alimentar, se equipar, e combater diversos inimigos e adversidades que apareceram no meio do seu caminho.\n\n\tVocê tem que conseguir dinheiro para se manter durante a viajem, mas para começar, aqui tem 100 moedas para se equipar e começar sua aventura.\n\n');
// // let continuar = prompt('APERTE ENTER PARA CONTINUAR');
// // console.clear();




// // console.log('\tParabéns você acaba de receber 100 MOEDAS\n\n');

// // continuar = prompt('APERTE ENTER PARA CONTINUAR');

// // console.clear();
// // console.log('\n\n\tMas antes vamos ver e entender seus ATRIBUTOS, que são eles: \n\n\tFORÇA –> (Capacidade para dar DANO) \n\n\tHP –> (vida – você morre se chegar a ZERO. RESTAURA 30% ao DORMIR)\n\n\tESTAMINA –> (energia – que gasta conforme você vai realizando as suas atividades diárias. RESTAURA AO DORMIR)\n\n\t');
















// // npm i figlet
// // const figlet = require("figlet");
// // figlet.textSync("Qulquer string ", {
// //         horizontalLayout: "default",
// //         verticalLayout: "default",
// //         width: 80,
// //         whitespaceBreak: true,
// //       })
// // Danilo Procópio20:30
// // console.log(
// //     // Forma síncrona do figlet, a assíncrona dava erros
   
// //       figlet.textSync(str, {
// //         horizontalLayout: "default",
// //         verticalLayout: "default",
// //         width: 80,
// //         whitespaceBreak: true,
// //       })
// //   );


// //https://www.npmjs.com/package/figlet



// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))
// console.log(Math.floor(Math.random() * 5))












