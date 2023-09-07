function myFunction(){
     alert("I have connected js test successfull");
}

cube = () => {
    let sides = prompt("How many sides does the cube have? ");

    var cubeSides = Math.floor(Math.random()*sides) + 1;
    alert("The cube has landed on " + cubeSides);
}

function addHeader(){
    let y = prompt("Type in a header for the webpage");
    let x = "Lasagne";
    
    let z = `Hi ${y}, I've heard that you like ${x} `

    let b = document.getElementById("header");
    b.append(z);
}

function formatInput()
{
    a = document.getElementById("name");
    b = document.getElementById("age");
    c = document.getElementById("address");
    d = document.getElementById("hobby");

    ab = String(a) + " is " + String(b) + " years old, lives in " + String(c) + " and likes " + String(d);
    
}

function mode(){
    var element = document.body;
    element.classList.toggle("dark");
    document.getElementById("modeButton").innerText = "Click to join the light side";
}

function partyButton(){
    var element = document.body;
    element.classList.toggle("dark");
    document.getElementById("partyButton").innerText = "Party";

    element.classList.toggle("light");
}

addEventListener("change", checkLogin);

function checkLogin(){
    const username = "Nicklas";
    const password = "password";

    document.getElementById("username").value === username
    && document.getElementById("password").value === password ?
        alert("You can now login (200)"): 
        alert("Error username and password does not match (401)");

    /*if(document.getElementById("username").value === username && document.getElementById("password").value === password){
        alert("You can now login");
        document.createElement("button");
    }
    else{
        alert("Error username and password does not match (401)")
    }*/
}