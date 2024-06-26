let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {

let campo = document.querySelector(tag);
campo.innerHTML = texto;


};
function exibirMensagemInicial() {

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);

}
exibirMensagemInicial()


function verificarChute() {
    let chute = document.querySelector('input').value

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabéns! Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
    if (chute == numeroSecreto) {exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');



    }  

   
   
     
    else if (chute > numeroSecreto) {exibirTextoNaTela('h1', 'Você errou!'); 
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
    
    }



    else if (chute < numeroSecreto) {
        
    exibirTextoNaTela('h1', 'Você errou!');
    
    

    
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    
    }


    tentativas++;
    limparCampo()

};
    
function gerarNumeroAleatorio() {


    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {

        return gerarNumeroAleatorio(); 
    }
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
        
    }

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);




}