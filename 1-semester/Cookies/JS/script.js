document.cookie = "navn = Jens;max-age=60";

function cookieFinder(){
    alert(document.cookie);
}

function gemNavnOgHobby(){
    const navn = document.getElementById("nameInput").value;
    const hobby = document.getElementById("hobbyInput").value;

    if (navn.trim() !== "" && hobby.trim() !== "") {
        localStorage.setItem("brugernavn", navn);
        localStorage.setItem("brugerhobby", hobby);
        opdaterVelkomst();
    } else {
        alert("Indtast venligst dit navn og din hobby.");
    }
}

function opdaterVelkomst(){
    const brugernavn = localStorage.getItem("brugernavn");
    const brugerhobby = localStorage.getItem("brugerhobby");
    const velkomstElement = document.querySelector("p");

    if (brugernavn != null && brugerhobby != null) {
        velkomstElement.textContent = "Hej, " + brugernavn + "! Din hobby er " + brugerhobby + ".";
    }
}

function sletNavnOgHobby(){
    localStorage.removeItem("brugernavn");
    localStorage.removeItem("brugerhobby");

    const reset = document.querySelector("p");
    reset.textContent = "Velkommen";
}



function gemInformation() {
    const navn = prompt("Indtast dit navn:");
    const alder = prompt("Indtast din alder:");
    const hobby = prompt("Indtast din hobby:");

    // Opret en cookie med brugeroplysningerne, der udløber om 1 time
    document.cookie = `brugerNavn=${navn}; expires=${udløbsDato(1)}`;
    document.cookie = `brugerAlder=${alder}; expires=${udløbsDato(1)}`;
    document.cookie = `brugerHobby=${hobby}; expires=${udløbsDato(1)}`;

    // Opdater siden med brugeroplysningerne
    visBrugerOplysninger();
}

// Funktion for at slette cookien
function sletCookie() {
    // Sæt udløbsdatoen tilbage til fortiden for at slette cookien
    document.cookie = "brugerNavn=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "brugerAlder=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "brugerHobby=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    // Opdater siden ved at fjerne brugeroplysningerne
    document.getElementById("userInfo").innerHTML = "";
}

// Funktion for at hente en cookieværdi ved navn
function hentCookie(navn) {
    const cookier = document.cookie.split("; ");
    for (let i = 0; i < cookier.length; i++) {
        const cookie = cookier[i].split("=");
        if (cookie[0] === navn) {
            return cookie[1];
        }
    }
    return null;
}

// Funktion for at beregne udløbsdatoen for en cookie
function udløbsDato(timer) {
    const nu = new Date();
    nu.setTime(nu.getTime() + (timer * 60 * 60 * 1000));
    return nu.toUTCString();
}

// Funktion for at vise brugeroplysninger på siden
function visBrugerOplysninger() {
    const navn = hentCookie("brugerNavn");
    const alder = hentCookie("brugerAlder");
    const hobby = hentCookie("brugerHobby");
    const userInfoElement = document.getElementById("userInfo");

    if (navn && alder && hobby) {
        userInfoElement.innerHTML = `Navn: ${navn}<br>Alder: ${alder}<br>Hobby: ${hobby}`;
    }
}

function tilladCookies() {
    if (confirm("Er du sikker på, at du vil tillade cookies?")) {
        const navn = prompt("Indtast dit navn:");
        const alder = prompt("Indtast din alder:");
        const hobby = prompt("Indtast din hobby:");

        // Opret en cookie med brugeroplysningerne, der udløber om 1 time
        document.cookie = `brugerNavn=${navn}; expires=${udløbsDato(1)}`;
        document.cookie = `brugerAlder=${alder}; expires=${udløbsDato(1)}`;
        document.cookie = `brugerHobby=${hobby}; expires=${udløbsDato(1)}`;

        visBrugerOplysninger();
    }
}

// Funktion for at afvise cookies og ikke gemme noget
function afvisCookies() {
    alert("Du har fravalgt cookies");
}

// Funktion for at beregne udløbsdatoen for en cookie
function udløbsDato(timer) {
    const nu = new Date();
    nu.setTime(nu.getTime() + (timer * 60 * 60 * 1000));
    return nu.toUTCString();
}