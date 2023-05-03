let word = ""
let wordGuess = []
let wrongGuess = []
let guessBomb = 0
let winCount = 1
let guess = ""
let dif = 0

function chooseDif1() {
    dif = 1
    document.getElementById('startButton').style.display = 'block'
    document.getElementById('chooseDifficulty').style.display = 'none'
}
function chooseDif2() {
    dif = 2
    document.getElementById('startButton').style.display = 'block'
    document.getElementById('chooseDifficulty').style.display = 'none'
}
function chooseDif3() {
    dif = 3
    document.getElementById('startButton').style.display = 'block'
    document.getElementById('chooseDifficulty').style.display = 'none'
}
function wordw() {
    let randomWords = ["amanhecer","carro","barco","cavalo","abacaxi","macaco","bicicleta","computador","telefone","avião","banana","camarão","casa","chave","dinheiro","escova","faca","folha","galinha","garfo","gato","hambuguer","hotel","igreja","janela","kiwi","laranja","leão","limão","maçã","mesa","microfone","navio","oculos","ovo","papagaio","peixe","piano","porta","queijo","rato","rede","revista","sapato","sofá","sombrero","sorvete","tartaruga","teclado","televisão","tigre","trem","vaca","violin","violão","xícara","xadrez","zebra","água","álbum","âncora","ânimo",  "árbitro","ícone","ódio","óbvio","óleo","ônibus","ônix","último","úmido"]
    let raNum = Math.floor(Math.random()*70)
    return randomWords[raNum]
}

function wordStart(){
    let wordLength = word.length;
    let wordL_ = "";
    let count = wordLength;

    while (count > 0) {
        wordGuess.push("<div class='wordBlocks'></div>")
        count -= 1
    }
}

function winCountFunc() {
    let num = 0
    let lettUsed = ""
    let count = word.length

    while(count > 0) {
        if(lettUsed.includes(word[count-1])){}
    
        else {
            num += 1
            lettUsed += word[count-1]
        }
        count -= 1
    }
    return num
}

function start() {
    word = wordw()
    winCount = winCountFunc()

    if(dif == 1) {
        guessBomb = word.length +5
    }
    else if (dif ==2) {
        guessBomb = word.length
    }
    else if(dif ==3){
        if(word.length % 2 ==0) {
            guessBomb = word.length / 2
        }else {
            guessBomb = (word.length -1) / 2
        }
    }

    console.log(word)
    document.getElementById('mainGame').style.display = 'block'
    document.getElementById('startButton').style.display = 'none'

    wordStart()
    console.log(wordGuess)
    document.getElementById('RRguess').style.display = 'block'
    document.getElementById("rightGuess").innerHTML = wordGuess.toString().replaceAll(',' , ' ')
    document.getElementById("wrongGuess").innerHTML = "Palpites Incorretos: " + wrongGuess
    document.getElementById('guessesLeft').innerHTML = "Tentativas Restantes: " + guessBomb

    let x = document.getElementById("guess").maxLength
}

function enterGuess() {
    let lett = document.getElementById("guess").value
    document.getElementById("guess").value = ""

    if(lett.length === 1) {
        let rightOnot = isRightOnot(lett)
        if (rightOnot == true) {
            NewCW(lett)
        }
        else{
            if(!wrongGuess.includes(lett)) {
                wrongGuess.push(`<div class='wrongWordBlocks'>${lett.toString().replaceAll(',' , ' ')}</div>`)
            }
            guessBomb -= 1
        }
    }

    else if (lett.length < 1) {
    }

    else {
        guessBomb -= 1
    }

    if (guessBomb <= 0) {
        gameLose()
    }

    if (winCount <= 0) {
        gameWin()
    }
    document.getElementById("rightGuess").innerHTML = wordGuess.toString().replaceAll(',',' ')
    document.getElementById("wrongGuess").innerHTML = "Palpites Incorretos: " + wrongGuess
    document.getElementById("guessesLeft").innerHTML = "Tentativas Restantes: " + guessBomb
}

function isRightOnot(a) {
    let n = word.includes(a)
    return n
}

function NewCW(letter) {
    let count = 0
    winCount -= 1

    while (count <= word.length - 1) {
        if (letter === word[count]){
            if (wordGuess[count] === letter) {
            }
            else{
            }

            wordGuess[count] = `<div class='wordBlocks'>${letter}</div>`
            count += 1
        }
        else {
            count += 1
        }
    }
}

function gameLose() {
    document.getElementById('mainGame').style.display = 'none';
    document.getElementById('RRguess').style.display = 'none';
    document.getElementById('youLose').style.display = 'block';
    document.getElementById("correctWordWas").innerHTML = "A palavra correta era: " + word;
}

function gameWin() {
    document.getElementById('mainGame').style.display = 'none';
    document.getElementById('RRguess').style.display = 'none';
    document.getElementById('youWin').style.display = 'block';
}
function restart() {
    document.getElementById('mainGame').style.display = 'none';
    document.getElementById('RRguess').style.display = 'none';
    document.getElementById('youLose').style.display = 'none';
    document.getElementById('youWin').style.display = 'none';
    document.getElementById('chooseDifficulty').style.display = 'block';
    word = "";
    wordGuess = [];
    wrongGuess = [];
    guessBomb = 0;
    winCount = 1;
    guess = "";
    dif = 0;
}