// Definition af objekttypen
interface Person {
    navn: string;
    alder: number;
    aktiv: boolean;
}
  
// Funktion til at indsamle brugerinput og oprette objekter
function indtastBrugerInput(): Person[] | null 
{
    const antalObjekterStr: string | null = prompt("Indtast antal objekter:");

    if (!antalObjekterStr)
    {
        return null;
    }

    const antalObjekter: number = parseInt(antalObjekterStr);

    if(isNaN(antalObjekter) || antalObjekter <= 0)
    {
        alert("Indtast et gyldigt positivt tal.");
        return null;
    }

    const objekter: Person[] = [];

    for (let i = 0; i < antalObjekter; i++) 
    {
        const navn: string = prompt("Indtast navn:") || "";
        const alderStr: string | null = prompt("Indtast alder:");
        if (!alderStr) {
        return null;
        }
        const alder: number = parseInt(alderStr);
        const aktiv: boolean = confirm("Er personen aktiv?");

        objekter.push({ navn, alder, aktiv });
    }

    return objekter;
}

// Funktion til at formatere og udskrive objekterne
function visObjekter(objekter: Person[]) {
    const outputDiv = document.getElementById("output");
    if (!outputDiv) 
    {
        console.error("Kunne ikke finde output-div'en.");
        return;
    }

    outputDiv.innerHTML = "<h2>Resultat:</h2>";
    for (const objekt of objekter) 
    {
        const aktivStatus: string = objekt.aktiv ? "aktiv" : "inaktiv";
        const paragraph = document.createElement("p");
        paragraph.textContent = `${objekt.navn} er ${objekt.alder} år gammel og ${aktivStatus}.`;
        outputDiv.appendChild(paragraph);
    }
}

const objekter: Person[] | null = indtastBrugerInput();

if (objekter) {
    visObjekter(objekter);
}
