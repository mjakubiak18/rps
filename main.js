var userScore = 0;
var compScore = 0;
var iloscFunkcji = 1;
var rezultat;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const wynik_div = document.querySelector(".wynik");
const table_div = document.querySelector(".tabela");
const rock_div = document.getElementById("kamien");
const paper_div = document.getElementById("papier");
const scissors_div = document.getElementById("nozyce");


function CompChoice(){
    const choices = ['r', 'p', 's'];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  wynik_div.innerHTML = "WYGRAŁEŚ";
}

function lose(){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  wynik_div.innerHTML = "PRZEGRAŁEŚ";
}

function draw(){
  compScore++;
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  wynik_div.innerHTML = "REMIS";
}

function rundy(){
    
    return document.getElementById("runda").value;
}

var rounds = document.getElementById("runda").value;

function resetuj(){
    userScore = 0;
    compScore = 0;
    iloscFunkcji = 1;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = userScore;
    wynik_div.innerHTML = "GRA ZRESETOWANA, CZEKAM NA RUCH";
    
}


function game(userChoice){

    var rezultat = rundy();

    const computerChoice = CompChoice();
    
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
    if(iloscFunkcji==rezultat){ 
        alert("Koniec gry!");
        return;
    };

    iloscFunkcji++;
    }


function main(){

    

    rock_div.addEventListener('click', function(){
        game("r");
    })


    paper_div.addEventListener('click', function(){
        game("p");
    })

  
    scissors_div.addEventListener('click', function(){
        game("s");
    })
   
}

main();
