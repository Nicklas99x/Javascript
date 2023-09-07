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