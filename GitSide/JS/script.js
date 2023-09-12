function addToList(){
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    let input = document.getElementById("input").value;

    li.appendChild(document.createTextNode(input));
    ul.append(li);
}

function addition(){
    let input = Number(document.getElementById("input").value);
    let input2 = Number(document.getElementById("input2").value);

    let addition = input + input2;

    printResultToScreen(addition);
}

function subtraction(){
    let input = Number(document.getElementById("input").value);
    let input2 = Number(document.getElementById("input2").value);

    let subtraction = input - input2;

    printResultToScreen(subtraction);
}

function multiplication(){
    let input = Number(document.getElementById("input").value);
    let input2 = Number(document.getElementById("input2").value);

    let multiplication = input * input2;

    printResultToScreen(multiplication);
}

function division(){
    let input = Number(document.getElementById("input").value);
    let input2 = Number(document.getElementById("input2").value);

    let division = input / input2;

    printResultToScreen(division);
}

function printResultToScreen(result){
    let output = document.getElementById("output");

    output.append(result);
}

let number = Math.floor(Math.random() * 1000);
var numberOfGuesses = 0;

function randomNumberGuesser(){
    let guess = Number(document.getElementById("guess").value);
    numberOfGuesses += 1;

    if(number === guess)
    {
        let amount = "Antal gæt: " + numberOfGuesses;
        alert("Du har regnet det ud");
        document.getElementById("showGuessCounter").textContent = amount;
    }
    else if(number < guess)
    {
        alert("Det magiske tal er mindre en dette gæt");
    }
    else if(number > guess)
    {
        alert("Det magiske tal er større and dette gæt");
    }

    //alert(number);
}

let countPlat = 0;
let countKrone = 0;

function tossCoins(){
    let cointoss = Math.floor(Math.random()*2+1);

    const plat = "plat";
    const krone = "krone";

    if(cointoss == 1)
    {
        countPlat++;
        alert("Det blev " + plat + " for " + countPlat + ". gang");
    }
    else
    {
        countKrone++
        alert("Det blev " + krone + " for " + countKrone + ". gang");
    }

    console.log(cointoss);
}

function printCubeResultToScreen(result){
    //output.innerText = "";
    let output = document.getElementById("result");

    output.append("du slog en " + result);
}

let result = "";

function cubeToss(){
    let cointoss = Math.floor(Math.random()*6 + 1);
    let output = document.getElementById("result");

    switch(cointoss)
    {
        case 1:
            output.innerText = "Du slog en etter";
            break;
        case 2:
            output.innerText = "Du slog en toer";
            break;
        case 3:
            output.innerText = "Du slog en treer";
            break;
        case 4:
            output.innerText = "Du slog en firer";
            break;
        case 5:
            output.innerText = "Du slog en femmer";
            break;
        case 6:
            output.innerText = "Du slog en sekser";
            break;
        default:
            output.innerText = "NaN";
            break;
    }

    console.log(cointoss);
}

function printSumOfNumbers()
{
    let input = prompt("Indtast et positivt heltal");

    for(i = 1, sum = 0; i <= input; i++)
    {        
        if(i % 7 == 0) continue;
        sum += i;
    }

    console.log("Summen af alle tal op til og med " + input + " er " + sum);
}