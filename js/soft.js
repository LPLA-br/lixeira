/*
 * Protótipo rápido 
 * */

const TAXA_DE_SOMA = 10;

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
    "Qual comando move arquivos A-rm B-mv C-mvfile D-move",
    "Qual comando verifica a conectividade? A-pong B-ping C-netlist D-netest",
    "Qual comando desliga o pc? A-diecomputer B-poweroff C-powerkill D-fatality",
    "Qual comando remove arquivo? A-remove B-kill C-rm D-del",
    "Qual comando lista um diretório? A-ls B-ln C-dir D-cp",
    "Qual comando abre o manual do sistema? A-man B-manual C-ajuda D-whatis",
    "Qual comando é utilizado para manipulação de roteamento, dispositivos de rede, interface: A-ip B-pi C-netstat D-net",
    "Qual comando gerencia serviços em um sistema Linux Moderno: A-systemctl B-sysctl C-init D-ps", "Qual comando cria usuários em um sistema linux: A-addman B-addu C-useradd D-usermod", "Qual comando mostra a data e hora atual: A- B- C- D-"
];

let respostasCorretas =
[
    "",
    "mv",
    "ping",
    "poweroff",
    "rm",
    "ls",
    "man",
    "ip",
    "systemctl"
];

linha++;
perg.innerHTML = pergs[linha];

function checar()
{
    if( pergs[linha + 1] == undefined )
    {
        window.alert(`Sua pontuação ao fim foi de: ${pontuacao}`);
    }

    perg.innerHTML = pergs[linha];
    if( resp.value == respostasCorretas[linha] )
    {
        resu.innerHTML = "acertaste " + `${pergs[linha]}`;
        pontuacao += TAXA_DE_SOMA;
        pontval.innerHTML = `${pontuacao}`
        linha++;
    }
    else
    {
        resu.innerHTML = "erraste" + `${pergs[linha]}`;
        linha++;
    }
    perg.innerHTML = pergs[linha];
}

chek.addEventListener("click", checar);
