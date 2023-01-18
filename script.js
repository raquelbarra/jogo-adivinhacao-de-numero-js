// Crie um jogo de adivinhacao
// O jogo devera gerar um numero aleatorio de 1 a 10 e salva-lo em uma variavel
// O jogo devera mostrar um prompt (caixa com um input para o usuario inserir um valor) e salvar o valor inserido pelo usuario
// A cada input do usuario, o jogo devera verificar se este acertou ou nao o valor inserido,
// caso tenha acertado, devera mostrar um alerta pro usuario uma mensagem indicando que este acertou e o numero de tentativas
// efetuadas. Caso o usuario tenha errado, devera mostrar um alerta com a mensagem de erro e a quantidade de tentativas e logo em 
// seguida outro prompt para que o usuario insira outro palpite
// o jogo acaba se o usuario clicar no botao cancelar do prompt ou se o usuario acertar o numero gerado

function iniciar(){
    
    let numSorteado = Math.floor(10* Math.random() + 1);

    let numSorte = 0;

    let tentativas = 0;

    let valida = false;

    let saida = false;

    // Solicita o número da sorte
    while ((numSorteado != numSorte || tentativas == 0) && saida == false) {

        // Caso seja à partir da segunda tentativa, exibe a mensagem
        if(tentativas >= 1){
            alert("Tente outra vez! \n Qtd de tentativas até o momento: "+tentativas);
        }

        // Recebimento do número da sorte
        numSorte = prompt("Qual o número da sorte? (1 - 10) ");

        // Valida se o usuário clicou em cancelar, caso não, valida o número recebido
        if(numSorte == false || numSorte == null){
            saida = true;
            break;
        }
        valida = validaNumero(numSorte);
        

        // Caso o valor digitado seja inválido, será solicitado um valor válido de 1 - 10
        while(valida == 'outro'){
            numSorte = Number(prompt("Digite um número válido! \n Qual o número da sorte? (1 - 10)"));

            // Valida se o usuário clicou em cancelar, caso não, valida o número recebido
            if(numSorte == false){
                saida = true;
                break;
            }
            valida = validaNumero(numSorte);
            
        }

        tentativas++;
    } 

    // Verifica se o usuário acertou o número sorteado
    if (numSorteado == numSorte) {
        alert(`Parabéns!!! \nO número sorteado é: ${numSorteado}\nVocê acertou após: ${tentativas == 0 ? 1 : tentativas} tentativas`);
        numSorteado = Math.floor(10* Math.random() + 1);
        tentativas = 0;
        numSorte = 0;
    }

    // Verifica se o botão cancelar foi clicado
    if (saida == true){
        alert(`Até mais!`);
        numSorteado = Math.floor(10* Math.random() + 1);
        tentativas = 0;
        numSorte = 0;
        saida = false;
    }

}

function validaNumero(numSorte){

    numTransformado = Number(numSorte);

    // Verifica se é número e se está contido no intervalo de 1 - 10
    if(!isNaN(numSorte) && (numTransformado >= 1 && (numTransformado <= 10))){
        // Verifica se é do tipo inteiro
        if(Number.isInteger(numTransformado)) {
            return 'numero';
        } else {
            return 'outro';
        }
    } else {
        return 'outro';
    }
}