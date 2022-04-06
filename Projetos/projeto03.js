const prompt = require ('prompt-sync')();

console.clear();

let fazendeiro = {
    nome: prompt('Qual seu nome? '),
    estamina: 100,
    fome: 100,




        exibir: function(){
            console.log(`\n
            STATUS DO PERSONAGEM:

            Nome: ${this.nome}
            Estamina: ${this.estamina}
            Fome: ${this.fome}
                        
            `);
            
        },
        dormir: function () {
            if(this.estamina <=0){
                tempo.passaTempoDormir();
        }

    }
        
}
console.log();



console.log(`\n\tVocê é um trabalhador(a) da cidade grande. Cada dia de sua vida é sempre a mesma coisa no
escritório, com seu chefe chato e ingrato, seus colegas de trabalho apáticos e com comportamentos robóticos, 
na cidade poluída e barulhenta e em seu apartamento apertado e de aluguel caro.\n\n\tUm certo domingo seus 
pais o convidaram para um churrasco na casa deles. Logo pensa que é uma ótima ideia. Precisa tirar uma folga 
deste lugar e aproveitar para matar a saudades deles.\n\n\tDurante o churrasco eles reparam que você está 
abatido, e perguntam o que está acontecendo contigo. Após o desabafo eles te abraçam de dizem que as coisas 
vão melhorar.\n\n\tO dia foi ótimo e passou voando. Quando se deu conta já estava para anoitecer. Tinha que 
ir embora para não pegar trânsito e chegar muito tarde, já que trabalhava no dia seguinte. Ao se despedir
de seus pais a porta, sua mãe agarra sua mão e lhe entrega um envelope.\n\n\tEla disse que era um presente
de seu amado avô que havia falecido a anos atrás. Vocês eram muito próximos e se pareciam de mais. 
Ele deixou esse envelope de herança para você, com a condição de só ser entregue a ti quando estiver 
se sentido perdido, como está neste dia.\n\n\tAo abrir o envelope encontrou uma chave velha e uma carta.\n\n\t`);

continuar();

console.log(`\nNela está escrito:\n\n\t “${fazendeiro.nome} se você está lendo isso, significa que você está desesperado 
por uma mudança na sua vida. Há muito tempo atrás, o mesmo aconteceu comigo. Eu perdi de vista o que mais
importa na vida: vínculos concretos com a natureza e outras pessoas. Foi então que decidi largar tudo e 
me mudar para o meu verdadeiro lar.”\n\t— Carta do vovô\n\n\t ${fazendeiro.nome} vamos começar nossa jornada!!!
\n\n\tEnfim chega o dia de sua mudança e você está cheio de expectativas para ver seu novo lar.\n`);

continuar();

console.log(`\nUma fazenda que seu avô tinha comprado quando novo.\n\n\tDepois de muitas horas 
de viajem você finalmente chega e se depara com um lugar com aparência de abandonado. A grama em alguns
lugares esta tão alta que se pode esconder um trator lá. A “charmosa” casa de campo que achou haveria, 
parece mais que é um barraco de ferramentas caindo aos pedaços. A cerca está quebrada, \na grama tem que ser aparada, ha muita limpeza a ser feita no terreno e é claro, reparar a sua casa para ela ficar do seu jeito. 
Há para todo lado galhos de arvores, troncos, arvores caídas e lixo espalhado por todo o solo onde
deveria ter uma plantacao.\n\t`)



continuar();

console.log(`\n\tPelo visto você terá um baita trabalho para deixar tudo em ordem. Mas em meio a tudo isso, 
reparou também na calmaria do lugar. Há pássaros cantando para todo o lado. Escutando com atenção reparou 
que havia um som de água corrente forte passando ali perto, provavelmente um rio.\n\n\tMas cansado de viajem 
resolve deixar tudo isso para o dia seguinte e ir para a sua nova casa e ver como esta por dentro. 
Ao entrar tem uma agradável surpresa. A mobília está como nova guardada sob plásticos e lençóis e após 
uma breve limpeza para retirar o excesso de poeira, vê que em uma das paredes esta todas as ferramentas 
que antes pertenciam ao seu avô. Tudo que iria precisar para realizar o seu trabalho diário.\n`);

continuar();

console.log(`\n\n\tE é aqui que começamos sua nova vida;\n\nBreve tutorial:\n\nSTATUS\n\n\tFOME: Ao passar do dia e fazendo suas atividades diárias você vai ficando com fome. \nSe esse status chegar a Zero você perde. Mas não se preocupe, tudo que precisa para sobreviver a sua terra te fornece. \nDormir também gasta fome (-20 de fome), então CUIDADO!!! Não deixe esse status ficar baixo.
De inicio tente conseguir comida nas arvores frutíferas espalhadas pela sua propriedade.
Pode comer quantas vezes quiser, sem gastar estamina ou tempo, isso claro é claro, se tiver alimento em seu estoque.\n\n\tEstamina:  Esse atributo mostra o quanto ainda tem de energia para realizar suas tarefas. \nSe chegar a 
Zero você dorme (não importa o que esteja fazendo) e o dia vira.\n\n\tEsse jogo é baseado em escolhas e dependendo delas seu personagem vai gastar quantidades especificas\n de estamina, que vai te fazer ir dormir. e gastar então tome cuidado para não desmaiar de cansado, isso afetara sua FOME no próximo dia de trabalho.\n\t`);

continuar();

// console.clear();

let plantacaoEfazenda = {
    areaLivre:[],
    sementes: 0,
    madeira: 0,    
    gramaAlta: 100,
    arvoresCaidas: 100,
    arvoresFrutas:50,
    cercaQuebrada: 10,
    prontoParaColher:0,
    cabanaConcerto: 3,

    exibir: function(){
        console.log(`\n
        TAREFAS DISPONIVEIS:

        Semente para plantar:${this.sementes}
        Madeiras: ${this.madeira}
        Área livre para plantacao: ${this.areaLivre.length}
        Gramas alta para cortar: ${this.gramaAlta}
        Arvores Caídas para remover: ${this.arvoresCaidas}
        Arvores disponiveis para colher frutas: ${this.arvoresFrutas}
        Cercas para concertar: ${this.cercaQuebrada}
        Plantacao Pronta Para Colher: ${this.prontoParaColher}

        `);

    },
    plantar: function(){
        plantacao.diaDePlantacao = tempo.dia;
        plantacao.qntPlantadas = 1;
        this.sementes -= 1;
        this.areaLivre.push(plantacao)

    }


}
//console.clear();

let tempo = {
    dia: 1,
    hora: 7, 
    

    exibeTempo: function(){
        console.log(`Agora é ${this.hora} horas do dia ${this.dia}.`)
    },

  
    passaTempo: function(tempo){
        this.hora += tempo
        if (this.hora >= 24){
            this.dia++
            this.hora -= 24;
            this.semente();
            
        }
    },

    passaTempoDormir: function(dormir=0){
        
        this.hora += tempo

        if (fazendeiro.estamina <= 0||dormir==1){
            console.log('Estava passando da hora de dormir você foi para casa descansar');
            this.dia++
            this.hora = 7
            fazendeiro.fome -= 20;            
            fazendeiro.estamina = 100;
            tempo.exibeTempo();
            fazendeiro.dormir();
            this.semente();
            
                
        }

    },

    semente: function (){
        for (let i = 0; i < plantacaoEfazenda.areaLivre.length; i++){
        //plantacao = plantacao
        plantacao = plantacaoEfazenda.areaLivre[i]

        if (this.dia - plantacao.diaDePlantacao >=5)
            {
                console.log(`A semente ${i+1} germinou`);
                colher.randColher();

            }
        }
    }
}


let plantacao ={
    diaDePlantacao:0,
    qntPlantadas: 0, // acho que é melhor eu chamar a areaLivre.length para mostrar o resultado

}




let colher ={

    beterraba:0,
    batata: 0,
    cenoura: 0,
    tomate:0,
    repolho: 0,
    alface: 0,
    frutas: 0,

    randColher: function(){
    Math.floor(Math.random() * 6)
    if (this.randColher === 0){
        colher.beterraba++
        plantacaoEfazenda.areaLivre.shift();
        let randsementes = Math.floor(Math.random() * 3);
        plantacaoEfazenda.sementes += randsementes
        console.log(`Você pegou ${randsementes} sementes`);

    }else if (this.randColher === 1){
        colher.batata++
        plantacaoEfazenda.areaLivre.shift();
        let randsementes = Math.floor(Math.random() * 3);
        plantacaoEfazenda.sementes += randsementes
        console.log(`Você pegou ${randsementes} sementes`);

    }else if(this.randColher === 2){
        colher.cenoura++
        plantacaoEfazenda.areaLivre.shift()
        let randsementes = Math.floor(Math.random() * 3);
        plantacaoEfazenda.sementes += randsementes
        console.log(`Você pegou ${randsementes} sementes`);

    }else if (this.randColher === 3){
        colher.tomate++
        plantacaoEfazenda.areaLivre.shift()
        let randsementes = Math.floor(Math.random() * 3);
        plantacaoEfazenda.sementes += randsementes
        console.log(`Você pegou ${randsementes} sementes`);

    }else if(this.randColher === 4){
        colher.repolho++
        plantacaoEfazenda.areaLivre.shift()
        let randsementes = Math.floor(Math.random() * 3);
        plantacaoEfazenda.sementes += randsementes
        console.log(`Você pegou ${randsementes} sementes`);

    }else if (this.randColher === 5){
        colher.alface++
        plantacaoEfazenda.areaLivre.shift()
        let randsementes = Math.floor(Math.random() * 3);
        plantacaoEfazenda.sementes += randsementes
        console.log(`Você pegou ${randsementes} sementes`);
    }

    //ALIMENTAÇÃO

    }, comer: function(){
    // if (this.alface != 0 || this.batata != 0 || this.beterraba != 0 || this.cenoura != 0 || this.frutas != 0 || this.repolho != 0 || this.tomate != 0){
    // fazendeiro.exibir();
    console.log(`Você esta com ${fazendeiro.fome} de fome`);
    // console.log();


    if(fazendeiro.fome <= 100){
    fazendeiro.exibir();
    console.log();
    console.log(`
    1 - Beterraba: ${this.beterraba} (+20 de fome)
    2 - Batata: ${this.batata} (+40 de fome)
    3 - Cenoura: ${this.cenoura} (+30 de fome)
    4 - tomate: ${this.tomate} (+10 de fome)
    5 - repolho: ${this.repolho} (+15 de fome)
    6 - alface: ${this.alface} (+25 de fome)
    7 - frutas: ${this.frutas} (+20 de fome)
    8 - PARA VOLTAR CASO NÃO QUEIRA SE ALIMENTAR
    `)
    let escolhaComida = +prompt(`Nº `)
    // if(escolhaComida != 1 || escolhaComida != 2 || escolhaComida != 3 || escolhaComida != 4 || escolhaComida != 5 || escolhaComida != 6 || escolhaComida != 7 || escolhaComida != 8 ){
    //     console.log(`Por favor digite um numero referente ao alimento desejado `);
    //     //escolhaComida = +prompt(`Nº `);
    //     colher.comer();
    //}
        if(escolhaComida == 1){
            if(this.beterraba == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.beterraba >= 1 ) {
                this.beterraba -= 1;
                fazendeiro.fome +20;
                if(fazendeiro.fome >= 100){
                fazendeiro.fome = 100;
            }
                console.log('Você comeu uma Beterraba, sua fome foi saciada em 20 ');
                fazendeiro.exibir;
                console.log();
            }
        }else if(escolhaComida == 2){
            if(this.batata == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.batata >= 1 ) {
                this.batata-= 1;
                fazendeiro.fome +40;
                if(fazendeiro.fome >= 100){
                fazendeiro.fome = 100;
                }
                console.log('Você comeu uma Batata, sua fome foi saciada em 40 ');
                fazendeiro.exibir;
                console.log();
            }
        }else if(escolhaComida == 3){
            if(this.cenoura == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.cenoura >= 1 ) {
                this.cenoura -= 1;
                fazendeiro.fome +30;
                if(fazendeiro.fome >= 100){
                    fazendeiro.fome = 100;
                }
                console.log('Você comeu uma Cenoura, sua fome foi saciada em 30 ');
                fazendeiro.exibir;
                console.log();
                }
        }else if(escolhaComida == 4){
            if(this.tomate == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.tomate >= 1 ) {
                this.tomate -= 1;
                fazendeiro.fome + 10;
                if(fazendeiro.fome >= 100){
                    fazendeiro.fome = 100;
                }
                console.log('Você comeu uma Tomate, sua fome foi saciada em 10 ');
                fazendeiro.exibir;
                console.log();
                }
        }else if(escolhaComida == 5){
            if(this.repolho == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.repolho >= 1 ) {
                this.repolho -= 1;
                fazendeiro.fome + 15;
                if(fazendeiro.fome >= 100){
                    fazendeiro.fome = 100;
                }
                console.log('Você comeu uma Repolho, sua fome foi saciada em 15 ');
                fazendeiro.exibir;
                console.log();
                }
        }else if(escolhaComida == 6){
            if(this.alface == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.alface >= 1 ) {
                this.alface -= 1;
                fazendeiro.fome + 25;
                if(fazendeiro.fome >= 100){
                    fazendeiro.fome = 100;
                }
                console.log('Você comeu uma Alface, sua fome foi saciada em 25 ');
                fazendeiro.exibir;
                console.log();
                }
        }else if(escolhaComida == 7){
            if(this.frutas == 0){
                console.log('estamos sem estoque desse alimento, tente outro');
                this.comer();
            }else if (this.frutas >= 1 ) {
                fazendeiro.fome += 20;
                    if(fazendeiro.fome >= 100){
                        fazendeiro.fome = 100;
                    }
                console.log(`Você comeu uma Frutas, sua fome foi saciada em 20 `);
                this.frutas -= 1;
                fazendeiro.exibir();
                console.log();
                }
        }else if(escolhaComida == 8){
            escolhas();
            console.log(`Estamos voltando a seus afazeres`)
        }
        }   
    }
    
}




function continuar(){
    prompt(`APERTE ENTER PARA CONTINUAR`);
    fazendeiro.exibir;
    // return console.clear();
}



//ESCOLHAS


//let reiniciar=[];
function escolhas(){
  
    if (plantacaoEfazenda.areaLivre.length == 0 && plantacaoEfazenda.sementes == 0){
        
        console.log(`\nQual tarefa quer realizar agora? (digite o numero da resposta)
     1 - Colher Frutas das arvoras próximas (-15 estamina, -15 fome, passa 3 horas)
     2 - Preparar solo em uma area 1m x 1m para plantar (-20 estamina, - 30 fome, passa 4 horas) 
     3 - Cortar e Retirar Arvores Caidas (-40 estamina, -40 fome, passa 5 horas)  
     4 - Cortar e limpar grama da área em volta da casa (-30 estamina, - 25 fome, passar 2 horas)
     5 - Dormir
     6 - Comer
     \n`);

         let resposta1 = +prompt(`Nº: `);
        
        if(resposta1 === 1){
            fazendeiro.estamina -= 15;
            fazendeiro.fome -= 15;
            plantacaoEfazenda.arvoresFrutas -= 1;
            tempo.passaTempo(3);
            tempo.exibeTempo();
        let randFrutas = Math.floor(Math.random() * 6) +1
        console.log(`você pegou ${randFrutas} frutas!\n `);
        colher.frutas += randFrutas
        fazendeiro.dormir();
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if (resposta1 === 2){
            fazendeiro.estamina -= 20;
            fazendeiro.fome -= 30;
            tempo.passaTempo(4);
            tempo.exibeTempo();
            plantacaoEfazenda.areaLivre.push('')
            console.log(`Você agora tem ${plantacaoEfazenda.areaLivre.length} de área livre para plantar\n`);
            fazendeiro.dormir();
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta1 === 3){
            fazendeiro.estamina -= 40;
            fazendeiro.fome -= 40;
        let cortarMadeira = Math.floor(Math.random() * 4) +1 ;
        plantacaoEfazenda.madeira += cortarMadeira;
        plantacaoEfazenda.arvoresCaidas -= 1;
        console.log(`você pegou ${cortarMadeira} madeiras!\n `);
            tempo.passaTempo(5);
            tempo.exibeTempo();
            fazendeiro.dormir();
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta1 === 4){
        fazendeiro.estamina -= 30;
        fazendeiro.fome -= 25;
        tempo.passaTempo(2);
        tempo.exibeTempo();
        fazendeiro.dormir();
        let randsementes = Math.floor(Math.random() * 2);
        plantacaoEfazenda.sementes += randsementes;
        plantacaoEfazenda.gramaAlta -=1;
        console.log(`Você pegou ${randsementes} sementes\n`);                 
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if (resposta1 === 5){
            tempo.passaTempoDormir(1);
        
        }else if(resposta1 === 6){
            colher.comer();
        }


    }else if (plantacaoEfazenda.areaLivre.length >= 1 && plantacaoEfazenda.sementes >= 1){
       
            console.log(`\nQual tarefa quer realizar agora? (digite o numero da resposta)
        1 - Colher Frutas das arvoras próximas (-15 estamina, -15 fome, passa 3 horas)
        2 - Preparar solo em uma area 1m x 1m para plantar (-20 estamina, - 30 fome, passa 4 horas) 
        3 - Cortar e Retirar Arvores Caidas (-40 estamina, -40 fome, passa 5 horas)  
        4 - Cortar e limpar grama da área em volta da casa (-30 estamina, - 25 fome, passar 2 horas)
        5 - Plantar Semente na Área livre (-25 estamina, - 25 fome, passar 2 horas)
        6 - Dormir
        7 - Comer
        \n`);
        
        let resposta2 = +prompt(`Nº: `);

        if (resposta2 === 1){
            fazendeiro.estamina -= 15;
            fazendeiro.fome -= 15;
            tempo.passaTempo(3);
            tempo.exibeTempo();
            fazendeiro.dormir();
            plantacaoEfazenda.arvoresFrutas -= 1;
            let randFrutas = Math.floor(Math.random() * 6) +1
            console.log(`você pegou ${randFrutas} frutas!\n `);
            colher.frutas += randFrutas
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta2 === 2){
            fazendeiro.estamina -= 20;
            fazendeiro.fome -= 30;
            tempo.passaTempo(4);
            tempo.exibeTempo();
            fazendeiro.dormir();
            plantacaoEfazenda.areaLivre.push('')
            console.log(`Você agora tem ${plantacaoEfazenda.areaLivre.length} de área livre para plantar\n`);
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();
            
    
        }else if (resposta2 === 3){
            fazendeiro.estamina -= 40;
            fazendeiro.fome -= 40;
            tempo.passaTempo(5);
            tempo.exibeTempo();
            fazendeiro.dormir();
            let cortarMadeira = Math.floor(Math.random() * 4) +1 ;
            plantacaoEfazenda.madeira += cortarMadeira;
            plantacaoEfazenda.arvoresCaidas -= 1;
            console.log(`você pegou ${cortarMadeira} madeiras!\n`);
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta2 === 4){
            fazendeiro.estamina -= 30;
            fazendeiro.fome -= 25;
            tempo.passaTempo(2);
            tempo.exibeTempo();
            fazendeiro.dormir();
            let randsementes = Math.floor(Math.random() * 2);
            plantacaoEfazenda.gramaAlta -=1;
            plantacaoEfazenda.sementes = plantacaoEfazenda.sementes + randsementes;
            console.log(`Você agora tem ${randsementes} sementes para plantantar\n`);  
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta2 === 5 ){
            fazendeiro.estamina -= 25;
            fazendeiro.fome -= 25;
            tempo.passaTempo(2);
            tempo.exibeTempo();
            fazendeiro.dormir();
            plantacaoEfazenda.sementes -= 1;
            plantacaoEfazenda.areaLivre.shift()
            plantacaoEfazenda.plantar();
            tempo.semente(tempo.dia);
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();


            console.log(`Você plantou uma SEMENTE, em 5 dias ela vai brotar\n`);

        }else if (resposta2 === 6){
            tempo.passaTempoDormir(1);
        
        }else if(resposta2 === 7){
            colher.comer();
            }
    

        
        }else if (plantacaoEfazenda.areaLivre.length >= 1 || plantacaoEfazenda.sementes >= 1){
 
        console.log(`\nQual tarefa quer realizar agora? (digite o numero da resposta)
        1 - Colher Frutas das arvoras próximas (-15 estamina, -15 fome, passa 3 horas)
        2 - Preparar solo em uma area 1m x 1m para plantar (-20 estamina, - 30 fome, passa 4 horas) 
        3 - Cortar e Retirar Arvores Caidas (-40 estamina, -40 fome, passa 5 horas)  
        4 - Cortar e limpar grama da área em volta da casa (-30 estamina, - 25 fome, passar 2 horas)
        5 - Dormir
        6 - Comer
        \n`);
        
        let resposta3 = +prompt(`Nº: `);
        
        if(resposta3 === 1){
            fazendeiro.estamina -= 15;
            fazendeiro.fome -= 15;
            plantacaoEfazenda.arvoresFrutas -= 1;
            tempo.passaTempo(3);
            tempo.exibeTempo();
            fazendeiro.dormir();
        let randFrutas = Math.floor(Math.random() * 5) +1
        console.log(`você pegou ${randFrutas} frutas! \n`);
        colher.frutas += randFrutas
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if (resposta3 === 2){
            fazendeiro.estamina -= 20;
            fazendeiro.fome -= 30;
            tempo.passaTempo(4);
            tempo.exibeTempo();
            fazendeiro.dormir();
            plantacaoEfazenda.areaLivre.push('')
            console.log(`Você agora tem ${plantacaoEfazenda.areaLivre.length} de área livre para plantar\n`);
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta3 === 3){
            fazendeiro.estamina -= 40;
            fazendeiro.fome -= 40;
        let cortarMadeira = Math.floor(Math.random() * 4) +1 ;
        plantacaoEfazenda.madeira += cortarMadeira;
        plantacaoEfazenda.arvoresCaidas -= 1;
        console.log(`você pegou ${cortarMadeira} madeiras!\n `);
            tempo.passaTempo(5);
            tempo.exibeTempo();
            fazendeiro.dormir();
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta3 === 4){
        fazendeiro.estamina -= 30;
        fazendeiro.fome -= 25;
        tempo.passaTempo(2);
        tempo.exibeTempo();
        fazendeiro.dormir();
        let randsementes = Math.floor(Math.random() * 2);
        plantacaoEfazenda.sementes += randsementes;
        plantacaoEfazenda.gramaAlta -=1;
        console.log(`Você pegou ${randsementes} sementes\n`);
        fazendeiro.exibir();  
        plantacaoEfazenda.exibir();               
   
        }else if (resposta3 === 5){
            tempo.passaTempoDormir(1);
        
        }else if(resposta3 === 6){
        colher.comer();
        }

         

        }
 
    
    if(plantacaoEfazenda.madeira >=10){
    console.log(`\nQual tarefa quer realizar agora? (digite o numero da resposta)
    1 -	Consertar a cerca (-40 estamina, - 30 fome, -10 madeiras,  passa 4 horas)
    2 -	Cortar e limpar grama da área em volta da casa  em uma área 1m x 1m  (-30 estamina, - 25 fome, passa 2 horas)
    3 -	Cortar e Retirar Arvores Caidas (-40 estamina, -40 fome, passa 5 horas)
    4 -	Preparar solo em uma area 1m x 1m para plantar (-20 estamina, - 30 fome, passa 4 horas)
    5 - Dormir
    6 - Comer
    \n`); 
    let resposta4 = +prompt(`Nº: `);
        if (resposta4 === 1){
        fazendeiro.estamina -= 40;
        fazendeiro.fome -= 30;
        tempo.passaTempo(4);
        tempo.exibeTempo();
        fazendeiro.dormir();
        plantacaoEfazenda.madeira -=10;
        plantacaoEfazenda.
        console.log(`Você gastou 10 madeiras para concertar a cerca\n`);
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if(resposta4 === 2){
        fazendeiro.estamina -= 30;
        fazendeiro.fome -= 25;
        tempo.passaTempo(2);
        tempo.exibeTempo();
        fazendeiro.dormir();
        let randsementes = Math.floor(Math.random() * 2);
        plantacaoEfazenda.sementes += randsementes
        plantacaoEfazenda.gramaAlta -=1;
        console.log(`Você agora tem ${randsementes} sementes para plantantar\n`);
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if (resposta4 === 3){
        fazendeiro.estamina -= 40;
        fazendeiro.fome -= 40;
        tempo.passaTempo(5);
        tempo.exibeTempo();
        fazendeiro.dormir();
        let cortarMadeira = Math.floor(Math.random() * 4) +1 ;
        console.log(`você pegou ${cortarMadeira} madeiras! \n`);
        plantacaoEfazenda.madeira += cortarMadeira;
        plantacaoEfazenda.arvoresCaidas -= 1;
        tempo.passaTempo(2);
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if (resposta4 === 4){
        fazendeiro.estamina -= 20;
        fazendeiro.fome -= 30;
        tempo.passaTempo(4);
        tempo.exibeTempo();
        fazendeiro.dormir();
        plantacaoEfazenda.areaLivre.push('')
        console.log(`Você agora tem ${plantacaoEfazenda.areaLivre.length} de área livre para plantar\n`)
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();
        
        }else if (resposta4 === 5){
        tempo.passaTempoDormir(1);

        }else if(resposta4 === 6){
            colher.comer();
        }

    

    }else if(plantacaoEfazenda.madeira >= 50){
        
        console.log(`\nQual tarefa quer realizar agora? (digite o númeroda resposta)
        1 -	Consertar a cerca (-20 estamina, - 20 fome, + 4 horas)
        2 - Reparar a Cabana (-60 estamina, - 50fome, + 10 horas )
        3 - Colher Frutas das arvoras próximas (-15 estamina, -15 fome, passa 3 horas)
        4 - Cortar e Retirar Arvores Caidas (-40 estamina, -40 fome, passa 5 horas)
        5 - Dormir
        6 - Comer      
        \n`)

        let resposta5 = +prompt(`Nº: `);
        if (resposta5 === 1){
            fazendeiro.estamina -= 20;
            fazendeiro.fome -= 20;
            tempo.passaTempo(4);
            tempo.exibeTempo();
            fazendeiro.dormir();      
            plantacaoEfazenda.madeira -=10;
            plantacaoEfazenda.cercaQuebrada -= 1;
            console.log(`Você gastou 10 madeiras para concertar a cerca\n`);
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();
    
        }else if(resposta5 === 2){
            fazendeiro.estamina -= 60;
            fazendeiro.fome -= 50;
            tempo.passaTempo(10);
            tempo.exibeTempo();
            fazendeiro.dormir();
            plantacaoEfazenda.exibir();
                if(plantacaoEfazenda.cabanaConcerto >= 0){
                plantacaoEfazenda.cabanaConcerto -= 1;
                plantacaoEfazenda.madeira -=50;
                console.log(`Você concertou a cabana, falta agora ${plantacaoEfazenda.cabanaConcerto} reparos a ser feito\n`);
                }else if(plantacaoEfazenda.cabanaConcerto == 0){
                    console.log(`PAREBENS SUA CASA ESTA PRONTA E LINDA, não precisa de reparos\n`);
                    fazendeiro.exibir();
                }

             
    
        }else if (resposta5 === 3){
            fazendeiro.estamina -= 15;
            fazendeiro.fome -= 15;
            plantacaoEfazenda.arvoresFrutas -= 1;
            tempo.passaTempo(3);
            tempo.exibeTempo();
            fazendeiro.dormir();
        let randFrutas = Math.floor(Math.random() * 5) +1
        console.log(`você pegou ${randFrutas} frutas! `);
        colher.frutas += randFrutas
        fazendeiro.exibir();
        plantacaoEfazenda.exibir();

        }else if (resposta5 === 4){
            fazendeiro.estamina -= 40;
            fazendeiro.fome -= 40;
        let cortarMadeira = Math.floor(Math.random() * 4) +1 ;
        plantacaoEfazenda.madeira += cortarMadeira;
        plantacaoEfazenda.arvoresCaidas -= 1;
        console.log(`você pegou ${cortarMadeira} madeiras! `);
            tempo.passaTempo(5);
            tempo.exibeTempo();
            fazendeiro.dormir();
            fazendeiro.exibir();
            plantacaoEfazenda.exibir();

        }else if (resposta5 === 5){
            tempo.passaTempoDormir(1);
            fazendeiro.exibir();
        
        }else if(resposta5 === 6){
            colher.comer();
            }
    }    

}







//  O CICLO COMEÇA AQUI


do{

escolhas();

if(fazendeiro.fome <= 0){
    break;
}

}while  (true)

console.log(`Fim de Jogo você morreu de fome`);
