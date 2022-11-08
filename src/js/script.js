const jogadas = ["pedra", "papel", "tesoura"]
let voce = document.getElementById("player1");
let computador = document.getElementById("player2");
const jogadaAleatorio = Math.floor(Math.random() * 3)
let jogadaDoComputador = jogadas[jogadaAleatorio]
let ptsComputador = Number()
let ptsUser = Number()
alert(`Jogada computador: ${jogadaDoComputador}`)
alert(`posicao : ${jogadaAleatorio}`)
console.log(`Jogada computador: ${jogadaDoComputador}`)
console.log(`Posicao da jogada : ${jogadaAleatorio}`)
console.log(jogadas)
//// enquanto jogadadousuario diferente à jogadadocomputador 
//// jogo continua rodando
    function jogar(jogadaDoUsuario) {
        if (jogadaDoUsuario === jogadaDoComputador) {
            alert("Empate, o computador jogou o mesmo que voce")
        } else if (jogadaDoComputador === "pedra") {
            if (jogadaDoUsuario === "papel") {
                alert(" Usuario jogou papel, O computador jogou pedra, Usuario Ganhou!!")
                ptsUser = ptsUser + 1;

            } else {
                alert(" Usuario Jogou tesoura, O computador jogou pedra, Usuario Perdeu !!")
                ptsComputador = ptsComputador + 1;
            }
        } else if (jogadaDoComputador === "papel") {
            if (jogadaDoUsuario === "pedra") {
                alert(" Usuario Jogou pedra, O computador jogou papel, Usuario Perdeu!!, ")
                ptsComputador = ptsComputador + 1
            } else {
                alert(" Usuario jogou tesouro, O computador jogou papel, Usuario Ganhou !!,")
                ptsUser = ptsUser + 1
            }
        } else if (jogadaDoComputador === "papel") {
            if (jogadaDoUsuario === "pedra") {
                alert(" Usuario Jogou pedra, O computador jogou papel,Usuario Perdeu!!,")
                ptsComputador = ptsComputador + 1
            } else {
                alert(" Usuario Ganhou!!!, O computador jogou papel")
                ptsUser = ptsUser + 1
            }
        } else if (jogadaDoComputador === "tesoura") {
            if (jogadaDoUsuario === "papel") {
                alert("Computador Jogou tesoura, Você jogou Papel,Computador Ganhou!!!!,")
                ptsComputador = ptsComputador + 1;
            } else {
                alert("Usuario jogou pedra,Computador Jogou tesoura,Usuario Ganhou !!!,")
                ptsUser = ptsUser + 1;
            }
        }


    }
        
        const resultado = () => {
            voce.innerHTML = ptsUser;
            computador.innerHTML = ptsComputador
            alert("jogou Acabou! ")
            console.log("Pontos do Usuario:" +ptsUser)
            console.log("Pontos do Computador "+ptsComputador)

        }


