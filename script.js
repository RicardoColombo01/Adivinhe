const somVitoria = new Audio("Sons/Win.mp3");
const somDerrota = new Audio("Sons/Derrota.mp3");
const somEmpate = new Audio("Sons/Empate.mp3");


let numeroSecreto = Math.floor(Math.random() *100) +1;
let tentativas = 0;
let restante = 10;
 
function verificar() {
    let palpite = parseInt(document.getElementById("digite").value);
    let mensagem = document.getElementById("mensagem");
    let tentativasEl = document.getElementById("tentativas");

// Se o número estiver fora do intervalo
if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
    mensagem.innerText = "Digite um número válido entre 1 e 100!";
    return;
}
tentativas++; // Aumenta as tentativas
tentativasEl.innerText = `Tentativas: ${tentativas}`;


if (palpite === numeroSecreto) {
    mensagem.innerText = ` Parabéns! Você acertou em ${tentativas} tentativas!`;
    mensagem.style.color = "lime";
    document.getElementById("digite").value = "";
    somVitoria.play();
    setTimeout(() => {
        reset()
    }, 3000);
} else if (palpite > numeroSecreto) {
    mensagem.innerText = " Muito alto! Tente um número menor.";
    mensagem.style.color = "yellow";
    document.getElementById("digite").value = "";
    restante--;
    console.log(`Você tem ${restante} tentativas restantes.`);
} else {
    mensagem.innerText = " Muito baixo! Tente um número maior.";
    mensagem.style.color = "orange";
    document.getElementById("digite").value = "";
    restante--;
    console.log(`Você tem ${restante} tentativas restantes.`);
}

if (restante === 0){
    mensagem.innerText = ` Você perdeu por conta de ${tentativas} tentativas erradas!`;
    document.getElementById("digite").value = "";
    mensagem.style.color = "red";
    somDerrota.play();
    setTimeout(() => {
        reset()
    }, 3000);
}
}
// Função para reiniciar o jogo
function reset() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById("mensagem").innerText = "";
    document.getElementById("tentativas").innerText = "Tentativas: 0";
    document.getElementById("digite").value = "";
    restante = 10;
}


