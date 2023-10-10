// Funktion til at indsamle brugerinput og oprette objekter
function indtastBrugerInput() {
    var antalObjekterStr = prompt("Indtast antal objekter:");
    if (!antalObjekterStr) {
        return null;
    }
    var antalObjekter = parseInt(antalObjekterStr);
    if (isNaN(antalObjekter) || antalObjekter <= 0) {
        alert("Indtast et gyldigt positivt tal.");
        return null;
    }
    var objekter = [];
    for (var i = 0; i < antalObjekter; i++) {
        var navn = prompt("Indtast navn:") || "";
        var alderStr = prompt("Indtast alder:");
        if (!alderStr) {
            return null;
        }
        var alder = parseInt(alderStr);
        var aktiv = confirm("Er personen aktiv?");
        objekter.push({ navn: navn, alder: alder, aktiv: aktiv });
    }
    return objekter;
}
// Funktion til at formatere og udskrive objekterne
function visObjekter(objekter) {
    var outputDiv = document.getElementById("output");
    if (!outputDiv) {
        console.error("Kunne ikke finde output-div'en.");
        return;
    }
    outputDiv.innerHTML = "<h2>Resultat:</h2>";
    for (var _i = 0, objekter_1 = objekter; _i < objekter_1.length; _i++) {
        var objekt = objekter_1[_i];
        var aktivStatus = objekt.aktiv ? "aktiv" : "inaktiv";
        var paragraph = document.createElement("p");
        paragraph.textContent = "".concat(objekt.navn, " er ").concat(objekt.alder, " \u00E5r gammel og ").concat(aktivStatus, ".");
        outputDiv.appendChild(paragraph);
    }
}
var objekter = indtastBrugerInput();
if (objekter) {
    visObjekter(objekter);
}
