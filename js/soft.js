/*Gambiarra aperriada*/

/*Quantas perguntas forem necessárias*/

//(-100,100)


//Pegunta
let perg = document.querySelector( '#perg' );

//resposta
let resp = document.querySelector( '#resp' );

//botões
let chek = document.querySelector( '#chck' );
let next = document.querySelector( '#next' );
//pontuação
let pont = document.querySelector( '#resp' );

//resutado
let resu = document.querySelector( '#resu' );

let linha = 0;
let pontuacao = 0;

let pnt = document.getElementById( 'pontval' )

let pergs =
[
    "",
    "Qual comando move arquivos \nA-rm \nB-mv \nC-mvfile \nD-move",
    "Qual comando verifica a conectividade? \nA-pong \nB-ping \nC-netshit \nD-dick",
    "Qual comando desliga o pc? \nA-diecomputer \nB-poweroff \nC-powerkill \nD-fatality",
    "Qual comando remove arquivo? \nA-remove \nB-kill \nC-rm \nD-mato",
    "Qual comando lista um diretório?\nA-ls \nB-ln \nC-dir \nD-dor",
    "Qual comando abre o manual do sistema?\nA-man \nB-woman \nC-girl \nD-bitch"
];

let respostasCorretas =
[
    "",
    "mv",
    "ping",
    "poweroff",
    "rm",
    "ls",
    "man"
];

linha++;
perg.innerHTML = pergs[linha];

function checar()
{
    perg.innerHTML = pergs[linha];
    if( resp.value == respostasCorretas[linha] )
    {
        resu.innerHTML = "acertaste " + `${pergs[linha]}`;
        pontuacao += 10;
        pontval.innerHTML = `${pontuacao}`
        linha++;
    }
    else
    {
        resu.innerHTML = "erraste";
        pontuacao -= 10;
        pontval.innerHTML = `${pontuacao}`
        linha++;
    }
    perg.innerHTML = pergs[linha];

    if( pontuacao > 100 || pergs[linha] == undefined)
    {
        window.alert( 'ganhou miseravel' );
        window.close();
    }
    else if( pontuacao < -100 )
    {
        window.alert('s u r p r i s e');
        while( true )
        {
            666*666;
            666*666;
            666*666;
        }
    }
}

chek.addEventListener("click", checar);
