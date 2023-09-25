function createPerson(){
    let person = {
        firstName: "Matt",
        lastName: "Pan",
        age: 18,
        hairColour: "brunt",
        introduceYourself: () => {
            alert("Jeg hedder " + person.firstName + " " + person.lastName + ", er " + person.age + " år gammel og har " + person.hairColour + " hår.");
        }
    }

    person.introduceYourself();
}

function studySome(){
    let ages = [15, 18, 20, 25, 28, 30];

    if(ages.some(checkForMinors) === true)
    {
        console.log("There is an imposter among us");
    }
    else
    {
        console.log("all good");
    }

    function checkForMinors(age){
        for(let i = 0; i = ages.length; i++)
        {
            return age < 18;
        }
    }
}

function arrayDefiner(){
    let listeStr = "Richard Madsen 52, André Mackus 39, Maja Miskeri 22, Mathias Ulrich 28, Tobias Michaelsen 23, Philip Schiøler 23, Nicklas Pedersen 23, Per Pedersen 60";
    let listeArr = listeStr.split(", ");
    let deltagere = [];

    for (let i = 0; i < listeArr.length; i++) 
    {
        let temp = listeArr[i].split(" ");
        deltagere.push({ 
            forNavn: temp[0], 
            efterNavn: temp[1], 
            alder: temp[2] 
        })
    }
}
function sort(a, b){
    
}

function multiDimensionalArray(){
    let arr4D = [[[["hej", "farvel"], ["mandag",
    "tirsdag"]], [["æble", "pære"], ["hest",
    "kamel"]]], [[["hvis", "sort"], ["hus",
    "hotel"]], ["femten", "seksten", "lyd",
    "lys"
    ]]];

    console.log(arr4D[1][0][1][1]);
}

function addMovie(){
    let actors = [];

    let title = document.getElementById("title").value;
    let director = document.getElementById("director").value;
    let release = document.getElementById("release").value;
    actors.push(document.getElementById("starring").value);

    let movie = {
        title: title,
        director: director,
        release: release,
        starring: actors
    }

    console.log(movie);

    putMovieOnTheSite(movie);
}

function putMovieOnTheSite(movie){
    var ul = document.getElementById("list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(movie.title, movie.director, movie.release, movie.actors));
    ul.appendChild(li);
}