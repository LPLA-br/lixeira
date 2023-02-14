/**
 * inclui o máximo e mínimo.
 * */
function inteiroAleatorioDentroLimites(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.radom() * (max - min + 1) + min );
}

const TAXA_DE_SOMA = 10;
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")

//Pegunta
let perg = document.querySelector( '#perg' );
let resp = document.querySelector( '#resp' );
let pontos = document.getElementById("pontos")
let resu = document.getElementById( 'resu' );

let linha = 0;
let pontuacao = 0;

let pnt = document.getElementById( 'pontval' )
let contador = document.querySelector('#contagem')
let numeroContagemReg = 10;

let pergs =
[
    "",
    "Qual comando move arquivos: <ul><li>rm</li><li>mv</li><li>mvfile</li><li>move</li></ul>",

    "Qual comando verifica a conectividade? <ul><li>pong</li> <li>ping</li> <li>netlist</li> <li>netest</li> </ul>",

    "Qual comando desliga o pc? <ul><li>diecomputer</li> <li>fatality</li> <li>powerkill</li> <li>poweroff</li></ul>",

    "Qual comando remove arquivo? <ul><li>remove</li> <li>kill</li> <li>rm</li> <li>del</li></ul>",

    "Qual comando lista um diretório? <ul><li>ls</li> <li>ln</li> <li>dir</li> <li>cp</li></ul>",

    "Qual comando abre o manual do sistema? <ul><li>man</li> <li>manual</li> <li>ajuda</li> <li>whatis</li></ul>",

    "Qual comando é utilizado para manipulação de roteamento, dispositivos de rede, interface: <ul><li>pi</li> <li>ip</li> <li>netstat</li> <li>ne</li></ul>",

    "Qual comando gerencia serviços em um sistema Linux Moderno: <ul><li>ps</li> <li>sysctl</li> <li>init</li> <li>systemctl</li></ul>",

    "Qual comando cria usuários em um sistema linux: <ul><li>addman</li> <li>addu</li> <li>useradd</li> <li>usermod</li></ul>", 

    "Qual comando mostra a data e hora atual: <ul><li>data</li> <li>hour</li> <li>day</li> <li>date</li></ul>",

    "Fim"
];

let respostasCorretas =
[
    "",
    "B",
    "B",
    "D",
    "C",
    "A",
    "A",
    "B",
    "D",
    "C",
    "D",
    ""
];

linha++;
perg.innerHTML = pergs[linha];

function pararIntervalo()
{
    window.clearInterval(x);
}

function checar(fimTempo)
{
    switch( fimTempo )
    {
        case true:
            resu.innerHTML = "fim do tempo!";
            resu.style;
            resu.style.backgroundColor = "#03A64A";
            linha++;
        default:
            numeroContagemReg = 10;
            if( pergs[linha + 1] == undefined )
            {
                window.alert(`Sua pontuação ao fim foi de: ${pontuacao}`);
                contador.innerHTML = 'Fim';
                pararIntervalo();
            }
            else
            {
                perg.innerHTML = pergs[linha];
                if( this.innerText == respostasCorretas[linha] )
                {   
                    resu.innerHTML = "Acertou";
                    resu.style.backgroundColor = "#03A64A";
                    pontuacao += TAXA_DE_SOMA;
                    pontos.innerHTML = `${pontuacao} pontos`;
                    linha++;
                }
                else
                {
                    resu.innerHTML = "Errou";
                    resu.style.backgroundColor = "#7c0606";
                    linha++;
                }
                perg.innerHTML = pergs[linha];
            }
    }
}

let x = window.setInterval( function()
{
    contador.innerHTML = numeroContagemReg.toString();
    switch( numeroContagemReg )
    {
        case 0:
            contador.style.color = '#00ff00';
            numeroContagemReg = 10;
            checar(true);
            break;
        default:
            numeroContagemReg--;
            if( numeroContagemReg <= 3 )
                contador.style.color = '#ff0000';
    }
}, 1000);

button1.addEventListener("click", checar)
button2.addEventListener("click", checar)
button3.addEventListener("click", checar)
button4.addEventListener("click", checar)
